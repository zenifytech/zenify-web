import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoungeUpdatesComponent } from './lounge-updates.component';

describe('LoungeUpdatesComponent', () => {
  let component: LoungeUpdatesComponent;
  let fixture: ComponentFixture<LoungeUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoungeUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoungeUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
