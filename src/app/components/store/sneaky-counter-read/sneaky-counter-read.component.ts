import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CounterState } from '../../../reducers/counter/counter.reducer';
import { selectCounter } from '../../../reducers/counter/counter.selector';

@Component({
  selector: 'app-sneaky-counter-read',
  templateUrl: './sneaky-counter-read.component.html',
  styleUrls: ['./sneaky-counter-read.component.scss']
})
export class SneakyCounterReadComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<{ count: CounterState }>) {
    this.count$ = store.select(selectCounter);
  }

  ngOnInit(): void {
  }

}
