import { createAction, props } from '@ngrx/store';
import { Song } from '../../services/artist';
import { Update } from '@ngrx/entity';

export const loadAllSongs = createAction(
  '[Song Resolver] Load All Songs'
);

export const allSongsLoaded = createAction(
  '[Load Songs Effect] All Songs Loaded',
  props<{songs: Song[]}>()
);

export const songUpdated = createAction(
  '[Edit Song Dialog] Song updated',
  props<{ update: Update<Song> }>()
);