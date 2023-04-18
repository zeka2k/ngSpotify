import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { routerReducer } from '@ngrx/router-store';
import { artistsReducer } from "../core/store/reducers/artist.reducers";
import { albumsReducer } from '../core/store/reducers/album.reducers';
import { songsReducer } from '../core/store/reducers/song.reducers';
import { likedAlbumsReducer } from '../core/store/reducers/liked-album.reducers';
import { likedSongsReducer } from '../core/store/reducers/liked-song.reducer';

export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  artists: artistsReducer,
  albums: albumsReducer,
  songs: songsReducer,
  likedAlbums: likedAlbumsReducer,
  likedSongs: likedSongsReducer,
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    // console.log('state before: ', state);
    // console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
