import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../../reducers/counter/counter.actions';
import { CounterState } from '../../../reducers/counter/counter.reducer';
import { selectCounter } from '../../../reducers/counter/counter.selector';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.scss']
})
export class CounterComponentComponent implements OnInit {

  count$: Observable<number>;
  count = 10;

  constructor(private store: Store<{ count: CounterState }>) {
    this.count$ = store.select(selectCounter);
  }

  ngOnInit(): void {
  }

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.store.dispatch(reset());
  }

}
