import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Album } from '../../services/artist';

export const loadAllAlbums = createAction(
  '[Album Resolver] Load All Albums'
);

export const allAlbumsLoaded = createAction(
  '[Load Albums Effect] All Albums Loaded',
  props<{albums: Album[]}>()
);

export const albumUpdated = createAction(
  '[Edit Album Dialog] Album updated',
  props<{ update: Update<Album> }>()
);
