import { createAction, props } from '@ngrx/store';
import { Song } from '../../services/artist';

export const loadAllSongs = createAction(
  '[Song Resolver] Load All Songs'
);

export const allSongsLoaded = createAction(
  '[Load Songs Effect] All Songs Loaded',
  props<{songs: Song[]}>()
);