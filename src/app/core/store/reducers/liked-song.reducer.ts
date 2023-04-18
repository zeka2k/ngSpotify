import { createReducer, on } from '@ngrx/store';
import { Song } from '../../services/artist';
import { LikedSongActions } from '../actions/action-type';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export interface LikedSongsState extends EntityState<Song> {
  allLikedSongsLoaded: boolean;
}

export const adapter = createEntityAdapter<Song>({
  
});

export const initialLikedSongsState = adapter.getInitialState({
  allLikedSongsLoaded: false,
});

export const likedSongsReducer = createReducer(
  initialLikedSongsState,

  on(LikedSongActions.allLikedSongsLoaded, (state, action) =>
    adapter.setAll(action.songs, { ...state, allLikedSongsLoaded: true })),

  on(LikedSongActions.addLikedSong, (state, action) => 
    adapter.setOne(action.song, {...state, addLikedSong: true})),

  on(LikedSongActions.removeLikedSong, (state, action) => 
    adapter.removeOne(action.song.id, {...state, removeLikedSong: true}))
);

export const { selectAll, selectEntities } = adapter.getSelectors();