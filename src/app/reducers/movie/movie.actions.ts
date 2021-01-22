import { createAction, props } from '@ngrx/store';
import { Movie } from '../../components/store/service-counter/service-counter.component';

export enum MovieActionType {
  LOAD = '[Movie Component] load'
}

export enum MovieApiActionType {
  API_SUCCESS = '[Movie API] Success',
  API_ERROR = '[Movie API] Error',
}

export const apiSuccess = createAction(MovieApiActionType.API_SUCCESS, props<{payload: Movie}>());
export const apiError = createAction(MovieApiActionType.API_ERROR);
export const load = createAction(MovieActionType.LOAD);
