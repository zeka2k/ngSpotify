import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, of } from 'rxjs';
import { Artist } from '../../services/artist';
import { GetDataService } from '../../services/getData.service';
import { ArtistActions } from '../actions/action-type';
import { allArtistsLoaded } from '../actions/artist.actions';

@Injectable()
export class ArtistsEffects {
  loadArtists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArtistActions.loadAllArtists),
      concatMap(() =>
        of(this.data.getArtists()).pipe(
          map((artists: Artist[]) => allArtistsLoaded({ artists }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private data: GetDataService) {}
}
