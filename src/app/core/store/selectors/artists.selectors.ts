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

export const selectArtistsEntities = createSelector(
  selectArtistsState,
  fromArtists.selectEntities
);

export const selectArtistById = (id:string) => createSelector(
  selectArtistsEntities,
  artistEntities => {
    return artistEntities[id];
  }
);