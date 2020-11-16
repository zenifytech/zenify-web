import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AppLocale } from 'src/app/shared/enums/app-locale.enum';
import { AppConfigurationsService } from 'src/app/shared/services/app-configurations.service';
import { RouteMatcherService } from 'src/app/shared/services/route-matcher.service';

@UntilDestroy()
@Component({
  selector: 'zen-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  public _authPage: boolean;
  public _appLocale: AppLocale;

  constructor(
    private appConfig: AppConfigurationsService,
    private routeMatcher: RouteMatcherService,
  ) { }

  ngOnInit(): void {
    this.subscribeToAppConfigs();
    this._authPage = this.routeMatcher.authPage();
  }

  public appLocales() {
    return [
      AppLocale.PH,
      AppLocale.AU,
      AppLocale.US
    ]
  }

  public setLocale(locale: AppLocale) {
    this.appConfig.configureLocale(locale);
  }

  private subscribeToAppConfigs() {
    this.appConfig.locale
      .pipe(untilDestroyed(this))
      .subscribe(locale => {
        this._appLocale = locale;
      })
  }
}
