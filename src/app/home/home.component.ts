import { Component, OnInit } from '@angular/core';
import { BaseService } from '../shared/services/base.service';
import { RouteMatcherService } from '../shared/services/route-matcher.service';

@Component({
  selector: 'zen-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public _contactPage: boolean;

  constructor(
    private routeMatcher: RouteMatcherService,
    private baseService: BaseService
  ) { }

  ngOnInit(): void {
    this._contactPage = this.routeMatcher.matches('contact');
    this.baseService.ping();
  }
}
