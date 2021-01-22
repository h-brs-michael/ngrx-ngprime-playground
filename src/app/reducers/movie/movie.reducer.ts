import { Action, createReducer, on } from '@ngrx/store';
import { apiError, apiSuccess, load } from './movie.actions';
import { Movie } from '../../components/store/service-counter/service-counter.component';

export interface MovieState {
  movie: Movie;
}

export const initialState: MovieState = {
  movie: {name: ''}
};

const thisMovieReducer = createReducer<MovieState>(
  initialState,
  on(apiSuccess, (state, { payload }) => ({ movie: payload })),
  on(apiError, (state) => ({ movie: { name: null } })),
  on(load, (state) => ({ ...state })),
);

export function movieReducer(state: MovieState | undefined, action: Action): MovieState {
  return thisMovieReducer(state, action);
}
