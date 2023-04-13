import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { routerReducer } from '@ngrx/router-store';
import { artistsReducer } from "../core/store/reducers/artist.reducers";
import { albumsReducer } from '../core/store/reducers/album.reducers';

export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  artists: artistsReducer,
  albums: albumsReducer
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
