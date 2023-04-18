import { createReducer, on } from '@ngrx/store';
import { Album } from '../../services/artist';
import { LikedAlbumActions } from '../actions/action-type';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export interface LikedAlbumsState extends EntityState<Album> {
  allLikedAlbumsLoaded: boolean;
}

export const adapter = createEntityAdapter<Album>({
  
});

export const initialLikedAlbumsState = adapter.getInitialState({
  allLikedAlbumsLoaded: false,
});

export const likedAlbumsReducer = createReducer(
  initialLikedAlbumsState,

  on(LikedAlbumActions.allLikedAlbumsLoaded, (state, action) =>
    adapter.setAll(action.albums, { ...state, allLikedAlbumsLoaded: true })),

  on(LikedAlbumActions.addLikedAlbum, (state, action) => 
    adapter.setOne(action.album, {...state, addLikedAlbum: true})),

  on(LikedAlbumActions.removeLikedAlbum, (state, action) => 
    adapter.removeOne(action.album.id, {...state, removeLikedAlbum: true}))
);

export const { selectAll, selectEntities } = adapter.getSelectors();