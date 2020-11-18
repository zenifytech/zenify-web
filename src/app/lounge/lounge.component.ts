import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouteMatcherService } from '../shared/services/route-matcher.service';

@Component({
  selector: 'zen-lounge',
  templateUrl: './lounge.component.html',
  styleUrls: ['./lounge.component.scss']
})
export class LoungeComponent implements OnInit, OnDestroy {

  public _loungePage: boolean; 

  constructor(
    private routeMatcher: RouteMatcherService
  ) { }

  ngOnInit(): void {
    this._loungePage = this.routeMatcher.endsWith("lounge");
  }

  ngAfterViewInit() {
    document.querySelector('body').classList.add('zen-lounge-body');
  }

  ngOnDestroy() {
    document.querySelector('body').classList.remove('zen-lounge-body');
  }
}
