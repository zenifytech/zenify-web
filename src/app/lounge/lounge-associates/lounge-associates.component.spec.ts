import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoungeAssociatesComponent } from './lounge-associates.component';

describe('LoungeAssociatesComponent', () => {
  let component: LoungeAssociatesComponent;
  let fixture: ComponentFixture<LoungeAssociatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoungeAssociatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoungeAssociatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
