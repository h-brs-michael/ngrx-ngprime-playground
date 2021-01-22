import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { counterReducer, CounterState } from './counter/counter.reducer';
import { movieReducer, MovieState } from './movie/movie.reducer';

export interface AppState {
  count: CounterState;
  movieState: MovieState;
}

export const reducers: ActionReducerMap<AppState> = {
  count: counterReducer,
  movieState: movieReducer
};


// created by cli and currently unused:
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
