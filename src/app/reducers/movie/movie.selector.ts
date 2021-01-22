import { createSelector } from '@ngrx/store';
import { MovieState } from './movie.reducer';
import { AppState } from '../index';
import { Movie } from '../../components/store/service-counter/service-counter.component';

export const selectMovieState = (state: AppState): MovieState => state.movieState;

export const selectMovieName = createSelector<AppState, MovieState, string>(
  selectMovieState,
  (state: MovieState) => state.movie.name
);

export const selectMovie = createSelector<AppState, MovieState, Movie>(
  selectMovieState,
  (state: MovieState) => state.movie
);
