import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LikedSongsState } from '../reducers/liked-song.reducer';
import * as fromLikedSongs from '../reducers/liked-song.reducer';

export const selectLikedSongsState =
  createFeatureSelector<LikedSongsState>('songs');

export const selectAllLikedSongs = createSelector(
  selectLikedSongsState,
  fromLikedSongs.selectAll
);

export const areLikedSongsLoaded = createSelector(
  selectLikedSongsState,
  state => state.allLikedSongsLoaded
);

export const selectLikedSongsEntities = createSelector(
  selectLikedSongsState,
  fromLikedSongs.selectEntities
);