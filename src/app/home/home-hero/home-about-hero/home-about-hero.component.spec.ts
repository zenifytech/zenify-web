import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutHeroComponent } from './home-about-hero.component';

describe('HomeAboutHeroComponent', () => {
  let component: HomeAboutHeroComponent;
  let fixture: ComponentFixture<HomeAboutHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAboutHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAboutHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
