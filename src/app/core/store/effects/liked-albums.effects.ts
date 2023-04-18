import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, of } from 'rxjs';
import { Album } from '../../services/artist';
import { GetDataService } from '../../services/getData.service';
import { LikedAlbumActions } from '../actions/action-type';
import { allLikedAlbumsLoaded } from '../actions/liked-albums.actions';

@Injectable()
export class LikedAlbumsEffects {
  loadLikedAlbums$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LikedAlbumActions.loadAllLikedAlbums),
      concatMap(() =>
        of(this.data.getLikedAlbumsStore()).pipe(
          map((albums: Album[]) => allLikedAlbumsLoaded({ albums }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private data: GetDataService) {}
}