import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LikedAlbumsState } from '../reducers/liked-album.reducers';
import * as fromLikedAlbums from '../reducers/liked-album.reducers';

export const selectLikedAlbumsState =
  createFeatureSelector<LikedAlbumsState>('albums');

export const selectAllLikedAlbums = createSelector(
  selectLikedAlbumsState,
  fromLikedAlbums.selectAll
);

export const areLikedAlbumsLoaded = createSelector(
  selectLikedAlbumsState,
  state => state.allLikedAlbumsLoaded
);

export const selectLikedAlbumsEntities = createSelector(
  selectLikedAlbumsState,
  fromLikedAlbums.selectEntities
);
