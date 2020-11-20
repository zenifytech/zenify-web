import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePricingHeroComponent } from './home-pricing-hero.component';

describe('HomePricingHeroComponent', () => {
  let component: HomePricingHeroComponent;
  let fixture: ComponentFixture<HomePricingHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePricingHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePricingHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
