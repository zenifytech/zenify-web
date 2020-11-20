import { Component, OnInit } from '@angular/core';
import { RouteMatcherService } from 'src/app/shared/services/route-matcher.service';

@Component({
  selector: 'zen-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  public _homePage: boolean;
  public _aboutPage: boolean;
  public _pricingPage: boolean;

  constructor(
    private routeMatcher: RouteMatcherService
  ) { }

  ngOnInit(): void {
    this._homePage = this.routeMatcher.homePage();
    this._aboutPage = this.routeMatcher.matches('about');
    this._pricingPage = this.routeMatcher.matches('pricing');
  }

}
