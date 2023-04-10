import { createAction, props } from '@ngrx/store';
import { Artist } from '../../services/artist';

export const loadAllArtists = createAction(
  '[Artist Resolver] Load All Artists'
);

export const allArtistsLoaded = createAction(
  '[Load Artists Effect] All Artists Loaded',
  props<{artists: Artist[]}>()
);
