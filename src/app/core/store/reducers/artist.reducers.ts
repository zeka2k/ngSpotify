import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Artist } from 'src/app/core/services/artist';
import { ArtistActions } from '../actions/action-type';

export interface ArtistsState extends EntityState<Artist> {
  allArtistsLoaded: boolean;
}

export const adapter = createEntityAdapter<Artist>({
  // sortComparer: compareCourses,
});

export const initialArtistsState = adapter.getInitialState({
  allArtistsLoaded: false,
});

export const artistsReducer = createReducer(
  initialArtistsState,

  on(ArtistActions.allArtistsLoaded, (state, action) =>
    adapter.setAll(action.artists, { ...state, allArtistsLoaded: true })
  )
);

export const { selectAll } = adapter.getSelectors();
