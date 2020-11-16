import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSigninComponent } from './home-signin.component';

describe('HomeSigninComponent', () => {
  let component: HomeSigninComponent;
  let fixture: ComponentFixture<HomeSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
