import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MovieState } from '../../../reducers/movie/movie.reducer';
import { selectCounter } from '../../../reducers/counter/counter.selector';
import { selectMovie } from '../../../reducers/movie/movie.selector';
import { load } from '../../../reducers/movie/movie.actions';

export interface Movie {
  name: string;
}

@Component({
  selector: 'app-service-counter',
  templateUrl: './service-counter.component.html',
  styleUrls: ['./service-counter.component.scss']
})
export class ServiceCounterComponent implements OnInit {

  movie$: Observable<Movie>;

  constructor(private store: Store<{ movieState: MovieState }>) {
  }

  ngOnInit(): void {
    this.movie$ = this.store.select(selectMovie);
    this.store.dispatch(load());
  }

  getNewServiceValue(): void {
    this.store.dispatch(load());
  }

}
