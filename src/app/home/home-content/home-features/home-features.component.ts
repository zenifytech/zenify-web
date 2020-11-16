import { Component, OnInit } from '@angular/core';
import { Messages } from 'src/app/shared/messages';
import { RouteMatcherService } from 'src/app/shared/services/route-matcher.service';

@Component({
  selector: 'zen-home-features',
  templateUrl: './home-features.component.html',
  styleUrls: ['./home-features.component.scss']
})
export class HomeFeaturesComponent implements OnInit {

  public _authPage: boolean;
  public _authProprietorPage: boolean;

  public readonly _proprietorFeatureHighlits = [
    Messages.FEATURE_PROPRIETOR_1,
    Messages.FEATURE_PROPRIETOR_3,
    Messages.FEATURE_PROPRIETOR_7,
    Messages.FEATURE_PROPRIETOR_8,
    Messages.FEATURE_PROPRIETOR_9,
    Messages.FEATURE_PROPRIETOR_10
  ];

  public readonly _associateFeatureHighlits = [
    Messages.FEATURE_ASSOCIATE_1,
    Messages.FEATURE_ASSOCIATE_3,
    Messages.FEATURE_ASSOCIATE_4,
    Messages.FEATURE_ASSOCIATE_6,
    Messages.FEATURE_ASSOCIATE_8
  ]

  constructor(
    private routeMatcher: RouteMatcherService
  ) { }

  ngOnInit(): void {
    this._authPage = this.routeMatcher.authPage();
    this._authProprietorPage = this._authPage && this.routeMatcher.includes('business');
  }

}
