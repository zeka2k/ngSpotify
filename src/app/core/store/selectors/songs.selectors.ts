import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SongsState } from '../reducers/song.reducers';
import * as fromSongs from '../reducers/song.reducers';

export const selectSongsState =
  createFeatureSelector<SongsState>('songs');


export const selectAllSongs = createSelector(
  selectSongsState,
  fromSongs.selectAll
);

export const areSongsLoaded = createSelector(
  selectSongsState,
  state => state.allSongsLoaded
);

export const selectSongsEntities = createSelector(
  selectSongsState,
  fromSongs.selectEntities
);

export const selectSongsById = (id:string) => createSelector(
  selectSongsEntities,
  songEntities => {
    return songEntities[id];
  }
);