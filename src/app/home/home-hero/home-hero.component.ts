import { trigger, transition, style, animate } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouteMatcherService } from 'src/app/shared/services/route-matcher.service';

@Component({
  selector: 'zen-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
  animations: [
    trigger(
      'slide-up', [
        transition(
          ':enter',  [
            style({ 'position':'relative', top: '-5rem', opacity: 0 }),
            animate('1s ease-out', 
                    style({ 'position':'relative', top: '0', opacity: 1 }))
          ]
        ),
        transition(
          ':leave',  [
            style({ 'position': 'relative', top: '0', opacity: 1 }),
            animate('.5s ease-in', 
                    style({ 'position': 'relative', top: '-5rem', opacity: 0 }))
          ]
        )
      ]
    ),
    trigger(
      'slide-down', [
        transition(
          ':enter',  [
            style({ 'position':'relative', bottom: '-5rem', opacity: 0 }),
            animate('1.25s ease-out', 
                    style({ 'position':'relative', bottom: '0', opacity: 1 }))
          ]
        ),
        transition(
          ':leave',  [
            style({ 'position': 'relative', bottom: '0', opacity: 1 }),
            animate('.5s ease-in', 
                    style({ 'position': 'relative', bottom: '-5rem', opacity: 0 }))
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
    @Inject(PLATFORM_ID) private platform: Object,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platform)) {
      this._mobileView = window.innerWidth <= 600;
    }
    this._homePage = this.routeMatcher.homePage();
    this._aboutPage = this.routeMatcher.matches('about');
    this._pricingPage = this.routeMatcher.matches('pricing');
    this._contactPage = this.routeMatcher.matches('contact');
    this.titleService.setTitle("Zenify Software Solutions | Software development made affordable")
  }
}
