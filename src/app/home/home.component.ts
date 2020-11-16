import { Component, OnInit } from '@angular/core';
import { RouteMatcherService } from '../shared/services/route-matcher.service';

@Component({
  selector: 'zen-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public _authPage: boolean;

  constructor(
    private routeMatcher: RouteMatcherService
  ) { }

  ngOnInit(): void {
    this._authPage = this.routeMatcher.authPage();
  }
}
