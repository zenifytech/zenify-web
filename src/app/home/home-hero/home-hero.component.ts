import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouteMatcherService } from 'src/app/shared/services/route-matcher.service';

@Component({
  selector: 'zen-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
  animations: [
    trigger(
      'slide-right', [
        transition(
          ':enter',  [
            style({ 'position':'relative', right: '-5rem', opacity: 0 }),
            animate('.75s ease-out', 
                    style({ 'position':'relative', right: '0', opacity: 0.8 }))
          ]
        ),
        transition(
          ':leave',  [
            style({ 'position': 'relative', right: '0', opacity: 0.8 }),
            animate('.5s ease-in', 
                    style({ 'position': 'relative', right: '-5rem', opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class HomeHeroComponent implements OnInit {

  public _mobileView: boolean;
  public _homePage: boolean;
  public _aboutPage: boolean;
  public _pricingPage: boolean;
  public _contactPage: boolean;

  constructor(
    private routeMatcher: RouteMatcherService,
  ) { }

  ngOnInit(): void {
    this._mobileView = window.innerWidth <= 600;
    this._homePage = this.routeMatcher.homePage();
    this._aboutPage = this.routeMatcher.matches('about');
    this._pricingPage = this.routeMatcher.matches('pricing');
    this._contactPage = this.routeMatcher.matches('contact');
  }
}
