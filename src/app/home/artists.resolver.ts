import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { first, Observable, tap } from 'rxjs';
import {AppState} from '../reducers';
import { Store } from '@ngrx/store';
import { loadAllArtists } from './artist.actions';

@Injectable()
export class ArtistsResolver implements Resolve<any> {
  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      tap(() => {
        this.store.dispatch(loadAllArtists());
      }),
      first()
    );
  }
}
