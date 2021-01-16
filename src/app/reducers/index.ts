import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { counterReducer, CounterState } from './counter/counter.reducer';

export interface AppState {
  count: CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  count: counterReducer
};


// created by cli and currently unused:
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
