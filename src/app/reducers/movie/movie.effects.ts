import { Injectable } from '@angular/core';
import { Actions, createEffect, CreateEffectMetadata, ofType } from '@ngrx/effects';
import { MovieService } from '../../services/movie.service';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Movie } from '../../components/store/service-counter/service-counter.component';
import { MovieActionType, MovieApiActionType } from './movie.actions';

interface LoadMovieResponse {
  payload?: Movie;
  type: MovieApiActionType;
}

@Injectable()
export class MovieEffects {

  constructor(private actions$: Actions,
              private movieService: MovieService) {
  }

  // todo: types
  loadMovie$: Observable<LoadMovieResponse> = createEffect(
    () => this.actions$.pipe(
      ofType(MovieActionType.LOAD),
      tap(() => console.log('load action in effects detected')),
      mergeMap(() => this.movieService.getMovie()
        .pipe(
          tap((movie) => console.log('movie loaded due to effect: ', movie)),
          map(movie => ({ type: MovieApiActionType.API_SUCCESS, payload: movie })),
          catchError(() => of({ type: MovieApiActionType.API_ERROR }))
        ))
    ),
    { dispatch: true } // default value: dispatches the value to the store
  );


}
