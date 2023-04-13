import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, of } from 'rxjs';
import { Song } from '../../services/artist';
import { GetDataService } from '../../services/getData.service';
import { SongActions } from '../actions/action-type';
import { allSongsLoaded } from '../actions/songs.actions';

@Injectable()
export class SongsEffects {
  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SongActions.loadAllSongs),
      concatMap(() =>
        of(this.data.getSongsStore()).pipe(
          map((songs: Song[]) => allSongsLoaded({ songs }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private data: GetDataService) {}
}