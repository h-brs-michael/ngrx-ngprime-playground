import { createAction, props } from '@ngrx/store';

enum CounterActionType {
  INCREMENT = '[Counter Component] Increment',
  DECREMENT = '[Counter Component] Decrement',
  SET = '[Counter Component] Set',
  RESET = '[Counter Component] Reset',
}

export const increment = createAction(CounterActionType.INCREMENT);
export const decrement = createAction(CounterActionType.DECREMENT);
export const set = createAction(CounterActionType.SET, props<{value: number}>());
export const reset = createAction(CounterActionType.RESET);
