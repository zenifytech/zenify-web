import { Component, OnInit } from '@angular/core';
import { RouteMatcherService } from 'src/app/shared/services/route-matcher.service';

@Component({
  selector: 'zen-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent implements OnInit {

  public _mobileView: boolean;
  public _authView: boolean;
  public _signinPage: boolean;

  constructor(
    private routeMatcher: RouteMatcherService
  ) { }

  ngOnInit(): void {
    this._mobileView = window.innerWidth <= 600;
    this._authView = this.routeMatcher.authPage();
    this._signinPage = this.routeMatcher.matches('signin');
  }
}
