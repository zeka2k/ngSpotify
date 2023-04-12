import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, of } from 'rxjs';
import { Album } from '../../services/artist';
import { GetDataService } from '../../services/getData.service';
import { AlbumActions } from '../actions/action-type';
import { allAlbumsLoaded } from '../actions/albums.actions';

@Injectable()
export class AlbumsEffects {
  loadAlbums$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AlbumActions.loadAllAlbums),
      concatMap(() =>
        of(this.data.getAlbums('the wekend')).pipe(
          map((albums: Album[]) => allAlbumsLoaded({ albums }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private data: GetDataService) {}
}