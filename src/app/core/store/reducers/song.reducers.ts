import { createReducer, on } from '@ngrx/store';
import { Song } from '../../services/artist';
import { SongActions } from '../actions/action-type';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export interface SongsState extends EntityState<Song> {
  allSongsLoaded: boolean;
}

export const adapter = createEntityAdapter<Song>({
  
});

export const initialSongsState = adapter.getInitialState({
  allSongsLoaded: false,
});

export const songsReducer = createReducer(
  initialSongsState,

  on(SongActions.allSongsLoaded, (state, action) =>
    adapter.setAll(action.songs, { ...state, allSongsLoaded: true }))
);

export const { selectAll } = adapter.getSelectors();