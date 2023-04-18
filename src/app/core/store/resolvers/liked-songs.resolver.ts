import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { filter, finalize, first, Observable, tap } from 'rxjs';
import { AppState } from '../../../reducers';
import { Store, select } from '@ngrx/store';
import { loadAllLikedSongs } from '../actions/liked-songs.actions';
import { areLikedSongsLoaded } from '../selectors/liked-songs.selectors';

@Injectable()
export class LikedSongsResolver implements Resolve<any> {
  loading = false;

  constructor(private store: Store<AppState>) {}

  resolve(
  ): Observable<any> {
    return this.store.pipe(
      select(areLikedSongsLoaded),
      tap(likedSongsLoaded => {
        if (!this.loading && !likedSongsLoaded) {
          this.loading = true;
          this.store.dispatch(loadAllLikedSongs());
        }
      }),
      filter(areLikedSongssLoaded => areLikedSongssLoaded),
      first(),
      finalize(() => this.loading = false)
    );
  }
}