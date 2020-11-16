import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppLocale } from '../enums/app-locale.enum';

@Injectable({
  providedIn: 'root'
})
export class AppConfigurationsService {

  private _appLocale = new BehaviorSubject<AppLocale>(AppLocale.PH);

  constructor() { }

  public configureLocale(location: AppLocale) {
    this._appLocale.next(location);
  }

  public get locale(): Observable<AppLocale> {
    return this._appLocale.asObservable();
  }
}
