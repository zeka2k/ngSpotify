import { createAction, props } from '@ngrx/store';
import { Album } from '../../services/artist';

export const loadAllLikedAlbums = createAction(
  '[Liked-Album Resolver] Load All Liked-Album'
);

export const allLikedAlbumsLoaded = createAction(
  '[Load Liked-Album Effect] All Albums Loaded',
  props<{albums: Album[]}>()
);

export const addLikedAlbum = createAction(
  '[Liked-Album Resolver] Add Liked-Album',
  props<{album: Album}>()
);

export const removeLikedAlbum = createAction(
  '[Liked-Album Resolver] Remove Liked-Album',
  props<{album: Album}>()
);