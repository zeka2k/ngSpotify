import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { filter, finalize, first, Observable, tap } from 'rxjs';
import { AppState } from '../../../reducers';
import { Store, select } from '@ngrx/store';
import { loadAllLikedAlbums } from '../actions/liked-albums.actions';
import { areLikedAlbumsLoaded } from '../selectors/liked-albums.selectors';

@Injectable()
export class LikedAlbumsResolver implements Resolve<any> {
  loading = false;

  constructor(private store: Store<AppState>) {}

  resolve(
  ): Observable<any> {
    return this.store.pipe(
      select(areLikedAlbumsLoaded),
      tap(likedAlbumsLoaded => {
        if (!this.loading && !likedAlbumsLoaded) {
          this.loading = true;
          this.store.dispatch(loadAllLikedAlbums());
        }
      }),
      filter(areLikedAlbumsLoaded => areLikedAlbumsLoaded),
      first(),
      finalize(() => this.loading = false)
    );
  }
}