import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { filter, finalize, first, Observable, tap } from 'rxjs';
import { AppState } from '../../../reducers';
import { Store, select } from '@ngrx/store';
import { loadAllAlbums } from '../actions/albums.actions';
import { areAlbumsLoaded } from '../selectors/albums.selectors';

@Injectable()
export class AlbumsResolver implements Resolve<any> {
  loading = false;

  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(areAlbumsLoaded),
      tap(albumsLoaded => {
        if (!this.loading && !albumsLoaded) {
          this.loading = true;
          this.store.dispatch(loadAllAlbums());
        }
      }),
      filter(areAlbumssLoaded => areAlbumssLoaded),
      first(),
      finalize(() => this.loading = false)
    );
  }
}