import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AlbumsState } from '../reducers/album.reducers';
import * as fromAlbums from '../reducers/album.reducers';

export const selectAlbumsState =
  createFeatureSelector<AlbumsState>('albums');


export const selectAllAlbums = createSelector(
  selectAlbumsState,
  fromAlbums.selectAll
);

export const areAlbumsLoaded = createSelector(
  selectAlbumsState,
  state => state.allAlbumsLoaded
);

export const selectAlbumsEntities = createSelector(
  selectAlbumsState,
  fromAlbums.selectEntities
);

export const selectAlbumsById = (id:string) => createSelector(
  selectAlbumsEntities,
  albumEntities => {
    return albumEntities[id];
  }
);