import { createSelector } from '@ngrx/store';
import { CounterState } from './counter.reducer';
import { AppState } from '../index';

export const selectCountState = (state: AppState): CounterState => state.count;

export const selectCounter = createSelector<AppState, CounterState, number>(
  selectCountState,
  (state: CounterState) => state.counter
);
