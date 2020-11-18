import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { RouteMatcherService } from 'src/app/shared/services/route-matcher.service';

@UntilDestroy()
@Component({
  selector: 'zen-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  public _authPage: boolean;

  constructor(
    private routeMatcher: RouteMatcherService,
  ) { }

  ngOnInit(): void {
    this._authPage = this.routeMatcher.authPage();
  }
}
