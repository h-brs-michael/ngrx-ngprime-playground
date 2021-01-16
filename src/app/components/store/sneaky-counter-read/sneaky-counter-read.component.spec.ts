import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakyCounterReadComponent } from './sneaky-counter-read.component';

describe('SneakyCounterReadComponent', () => {
  let component: SneakyCounterReadComponent;
  let fixture: ComponentFixture<SneakyCounterReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakyCounterReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakyCounterReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
