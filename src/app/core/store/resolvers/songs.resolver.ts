import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { filter, finalize, first, Observable, tap } from 'rxjs';
import { AppState } from '../../../reducers';
import { Store, select } from '@ngrx/store';
import { loadAllSongs } from '../actions/songs.actions';
import { areSongsLoaded } from '../selectors/songs.selectors';

@Injectable()
export class SongsResolver implements Resolve<any> {
  loading = false;

  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(areSongsLoaded),
      tap(songsLoaded => {
        if (!this.loading && !songsLoaded) {
          this.loading = true;
          this.store.dispatch(loadAllSongs());
        }
      }),
      filter(areSongsLoaded => areSongsLoaded),
      first(),
      finalize(() => this.loading = false)
    );
  }
}