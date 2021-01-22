import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../components/store/service-counter/service-counter.component';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  get movie(): Movie {
    const moviesNames = ['Fight Club', 'Pulp Fiction', 'The Big Lebowski'];
    return { name: moviesNames[Math.floor(Math.random() * moviesNames.length)] };
  }

  constructor() {
  }

  getMovie(): Observable<Movie> {
    return of(this.movie);
  }
}
