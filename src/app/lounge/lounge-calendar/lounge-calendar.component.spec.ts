import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoungeCalendarComponent } from './lounge-calendar.component';

describe('LoungeCalendarComponent', () => {
  let component: LoungeCalendarComponent;
  let fixture: ComponentFixture<LoungeCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoungeCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoungeCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
