import { createReducer, on } from '@ngrx/store';
import { Album } from '../../services/artist';
import { AlbumActions } from '../actions/action-type';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export interface AlbumsState extends EntityState<Album> {
  allAlbumsLoaded: boolean;
}

export const adapter = createEntityAdapter<Album>({
  
});

export const initialAlbumsState = adapter.getInitialState({
  allAlbumsLoaded: false,
});

export const albumsReducer = createReducer(
  initialAlbumsState,

  on(AlbumActions.allAlbumsLoaded, (state, action) =>
    adapter.setAll(action.albums, { ...state, allAlbumsLoaded: true })),

  on(AlbumActions.albumUpdated, (state, action) => 
    adapter.updateOne(action.update, state))
);

export const { selectAll, selectEntities } = adapter.getSelectors();