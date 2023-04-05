import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { finalize, first, Observable, tap } from 'rxjs';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { loadAllArtists } from './artist.actions';

@Injectable()
export class ArtistsResolver implements Resolve<any> {
  loading = false;

  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      tap(() => {
        if (!this.loading) {
          this.loading = true;
          this.store.dispatch(loadAllArtists());
        }
      }),
      first(),
      finalize(() => this.loading = false)
    );
  }
}
