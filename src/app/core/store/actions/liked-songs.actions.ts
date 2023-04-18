import { createAction, props } from '@ngrx/store';
import { Song } from '../../services/artist';

export const loadAllLikedSongs = createAction(
  '[Liked-Song Resolver] Load All Liked-Songs'
);

export const allLikedSongsLoaded = createAction(
  '[Load Liked-Song Effect] All Songs Loaded',
  props<{songs: Song[]}>()
);

export const addLikedSong = createAction(
  '[Liked-Song Resolver] Add Liked-Song',
  props<{song: Song}>()
);

export const removeLikedSong = createAction(
  '[Liked-Song Resolver] Remove Liked-Song',
  props<{song: Song}>()
);