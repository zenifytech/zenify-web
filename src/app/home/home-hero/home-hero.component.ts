import { Component, OnInit } from '@angular/core';
import { RouteMatcherService } from 'src/app/shared/services/route-matcher.service';

@Component({
  selector: 'zen-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent implements OnInit {

  public _mobileView: boolean;
  public _homePage: boolean;
  public _aboutPage: boolean;

  constructor(
    private routeMatcher: RouteMatcherService
  ) { }

  ngOnInit(): void {
    this._mobileView = window.innerWidth <= 600;
    this._homePage = this.routeMatcher.homePage();
    this._aboutPage = this.routeMatcher.matches('about');
  }
}
