import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakyCounterWriteComponent } from './sneaky-counter-write.component';

describe('SneakyCounterWriteComponent', () => {
  let component: SneakyCounterWriteComponent;
  let fixture: ComponentFixture<SneakyCounterWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakyCounterWriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakyCounterWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
