import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { filter, finalize, first, Observable, tap } from 'rxjs';
import { AppState } from '../../../reducers';
import { Store, select } from '@ngrx/store';
import { loadAllArtists } from '../actions/artist.actions';
import { areArtistsLoaded } from '../selectors/artists.selectors';

@Injectable()
export class ArtistsResolver implements Resolve<any> {
  loading = false;

  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(areArtistsLoaded),
      tap(artistsLoaded => {
        if (!this.loading && !artistsLoaded) {
          this.loading = true;
          this.store.dispatch(loadAllArtists());
        }
      }),
      filter(areArtistsLoaded => areArtistsLoaded),
      first(),
      finalize(() => this.loading = false)
    );
  }
}
