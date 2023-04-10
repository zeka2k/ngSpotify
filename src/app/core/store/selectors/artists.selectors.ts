import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArtistsState } from '../reducers/artist.reducers';
import * as fromArtists from '../reducers/artist.reducers';

export const selectArtistsState =
  createFeatureSelector<ArtistsState>('artists');


export const selectAllArtists = createSelector(
  selectArtistsState,
  fromArtists.selectAll
);

export const areArtistsLoaded = createSelector(
  selectArtistsState,
  state => state.allArtistsLoaded
);