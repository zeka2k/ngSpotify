import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AlbumsState } from '../reducers/album.reducers';
import * as fromAalbums from '../reducers/album.reducers';

export const selectAlbumsState =
  createFeatureSelector<AlbumsState>('albums');


export const selectAllAlbums = createSelector(
  selectAlbumsState,
  fromAalbums.selectAll
);

export const areAlbumsLoaded = createSelector(
  selectAlbumsState,
  state => state.allAlbumsLoaded
);