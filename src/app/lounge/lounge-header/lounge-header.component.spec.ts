import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoungeHeaderComponent } from './lounge-header.component';

describe('LoungeHeaderComponent', () => {
  let component: LoungeHeaderComponent;
  let fixture: ComponentFixture<LoungeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoungeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoungeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
