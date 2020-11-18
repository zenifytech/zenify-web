import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoungeProjectsComponent } from './lounge-projects.component';

describe('LoungeProjectsComponent', () => {
  let component: LoungeProjectsComponent;
  let fixture: ComponentFixture<LoungeProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoungeProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoungeProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
