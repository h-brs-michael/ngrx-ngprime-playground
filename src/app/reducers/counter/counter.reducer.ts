import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, set } from './counter.actions';

export interface CounterState {
  counter: number;
}

export const initialState: CounterState = {
  counter: 0
};

const thisCounterReducer = createReducer<CounterState>(
  initialState,
  on(increment, (state) => ({ counter: state.counter + 1 })),
  on(decrement, (state) => ({ counter: state.counter - 1 })),
  on(set, (state, { value }) => ({ counter: value })),
  on(reset, (state) => ({ counter: 0 }))
);

export function counterReducer(state: CounterState | undefined, action: Action): CounterState {
  return thisCounterReducer(state, action);
}
