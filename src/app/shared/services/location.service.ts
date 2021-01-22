import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private _country = new BehaviorSubject<any>(undefined);

  constructor(
    private http: HttpClient
  ) { }

  public getLocation() {
    this.http.get("https://api64.ipify.org/?format=json", { headers: null })
      .subscribe((response: any) => {
        if (response) {
          this.getCountry(response.ip);
        }
      });
  }

  public get country(): Observable<any> {
    return this._country.asObservable();
  }

  private getCountry(ip: string) {
    this.http.get("https://ipapi.co/" + ip + "/json/")
      .subscribe((response: any) => {
        if (response) {
          this._country.next(response.country_code);
        }
      });
  }
}
