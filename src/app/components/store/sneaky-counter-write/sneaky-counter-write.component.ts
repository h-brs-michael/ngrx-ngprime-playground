import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset, set } from '../../../reducers/counter/counter.actions';

@Component({
  selector: 'app-sneaky-counter-write',
  templateUrl: './sneaky-counter-write.component.html',
  styleUrls: ['./sneaky-counter-write.component.scss']
})
export class SneakyCounterWriteComponent implements OnInit {

  val: number;

  constructor(private store: Store<{ count: number }>) {
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

  set(): void {
    this.store.dispatch(set({value: this.val}));
  }
}
