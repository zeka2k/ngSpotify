import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Artist } from 'src/app/core/services/artist';
import { ArtistActions } from '../actions/action-type';

export interface CoursesState extends EntityState<Artist> {
  allCoursesLoaded: boolean;
}

export const adapter = createEntityAdapter<Artist>({
  // sortComparer: compareCourses,
});

export const initialCoursesState = adapter.getInitialState({
  allCoursesLoaded: false,
});

export const artistReducer = createReducer(
  initialCoursesState,

  on(ArtistActions.allArtistsLoaded, (state, action) =>
    adapter.setAll(action.artists, { ...state, allCoursesLoaded: true })
  )

  // on(ArtistActions.courseUpdated, (state, action) =>
  //     adapter.updateOne(action.update, state) )
);

export const { selectAll } = adapter.getSelectors();