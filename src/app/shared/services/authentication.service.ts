import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountRequest } from '../models/account-request';
import { QueryEventService } from './query-event.service';
import { environment } from 'src/environments/environment';
import { QueryEventType } from '../enums/query-event-type.enum';
import { QueryEventStatus } from '../enums/query-event-status.enum';
import { Messages } from '../messages';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { UserAccount } from '../models/user-account';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _serviceUrl: string;

  private _domain = new BehaviorSubject<string>(undefined);
  private _currentUser = new BehaviorSubject<UserAccount>(undefined);

  constructor(
    private http: HttpClient,
    private firebaseService: FirebaseService,
    private queryEventService: QueryEventService
  ) {
    this._serviceUrl = environment.serviceUrl;
    this.subscribeToAuthenticatedUsers();
  }

  public checkEmailAvailability(email: string, domain?: string) {
    const type = QueryEventType.DOMAIN_CHECK;
    this.queryEventService.notifyEvent({type: type, status: QueryEventStatus.IN_PROGRESS});

    let url = this._serviceUrl + '/auth/v1/user-domain';
    url = this.addParam(url, 'email', email);
    url = this.addParam(url, 'domain', domain);

    this.http.get(url)
      .pipe(catchError(this.handleErrors(type, [])))
      .subscribe(result => {
        if (!result) {
          this.queryEventService.notifyEvent({type: type, status: QueryEventStatus.COMPLETED});
        } else {
          this.queryEventService.notifyEvent({type: type, status: QueryEventStatus.ERROR});
        }
      });
  }

  public checkDomain(email: string, domain?: string) {
    const type = QueryEventType.DOMAIN_CHECK;
    this.queryEventService.notifyEvent({type: type, status: QueryEventStatus.IN_PROGRESS});

    let url = this._serviceUrl + '/auth/v1/user-domain';
    url = this.addParam(url, 'email', email);
    url = this.addParam(url, 'domain', domain);

    this.http.get(url)
      .pipe(catchError(this.handleErrors(type, [])))
      .subscribe(result => {
        if (result) {
          this._domain.next(result.domain);
          this.queryEventService.notifyEvent({type: type, status: QueryEventStatus.COMPLETED});
        } else {
          this.queryEventService.notifyEvent({type: type, status: QueryEventStatus.ERROR});
        }
      });
  }

  public signup(account: AccountRequest, domain: string) {
    const type = (domain === 'PROPRIETOR') ? QueryEventType.SIGNUP_PROPRIETOR : QueryEventType.SIGNUP_ASSOCIATE;
    this.queryEventService.notifyEvent({type: type, status: QueryEventStatus.IN_PROGRESS});

    this.http.post(this._serviceUrl + '/auth/v1/sign-up', account)
      .pipe(catchError(this.handleErrors(type, [])))
      .subscribe(result => {
        this.queryEventService.notifyEvent({type: type, status: QueryEventStatus.COMPLETED});
      });
  }

  public signin(email: string, password: string, domain: string) {
    const type = (domain === 'PROPRIETOR') ? QueryEventType.SIGNIN_PROPRIETOR : QueryEventType.SIGNIN_ASSOCIATE;
    this.queryEventService.notifyEvent({type: type, status: QueryEventStatus.IN_PROGRESS});

    this.auth(domain).signInWithEmailAndPassword(email, password).then(response => {
      if (response) {
        localStorage.setItem("user.email", email);
        localStorage.setItem("user.domain", domain);
        this.queryEventService.notifyEvent({type: type, status: QueryEventStatus.COMPLETED});
      }
    }, err => {
      this.queryEventService.notifyEvent({type: type, status: QueryEventStatus.ERROR});
    });
  }

  public get domain(): Observable<string> {
    return this._domain.asObservable();
  }

  private subscribeToAuthenticatedUsers() {
    this.subscribeToProprietorUsers();
    this.subscribeToAssociateUsers();
  }

  private subscribeToProprietorUsers() {
    this.auth('proprietor').user.subscribe(user => {
      const type = QueryEventType.FEDERATE_PROPRIETOR;
      if (user) {
        localStorage.setItem("user.uid", user.uid);

        user.getIdToken().then(token => {
          localStorage.setItem("user.id-token", token);

          this.http.post<UserAccount>(this._serviceUrl + '/auth/v1/federate', {})
            .pipe(catchError(this.handleErrors(type, [])))
            .subscribe(response => {
              if (response) {
                this._currentUser.next(response);
              }
              
              this.queryEventService.notifyEvent({type: type, status: QueryEventStatus.COMPLETED});
            });
        });
      }
    });
  }

  private subscribeToAssociateUsers() {
    this.auth('associate').user.subscribe(user => {
      const type = QueryEventType.FEDERATE_ASSOCIATE;
      if (user) {
        localStorage.setItem("user.uid", user.uid);

        user.getIdToken().then(token => {
          localStorage.setItem("user.id-token", token);

          this.http.post<UserAccount>(this._serviceUrl + '/auth/v1/federate', {})
            .pipe(catchError(this.handleErrors(type, [])))
            .subscribe(response => {
              if (response) {
                this._currentUser.next(response);
              }
              
              this.queryEventService.notifyEvent({type: type, status: QueryEventStatus.COMPLETED});
            });
        });
      }
    });
  }

  private auth(domain: string) {
    return (domain === 'PROPRIETOR') ? this.firebaseService.businessAuth : this.firebaseService.communityAuth;
  }

  private addParam(url: string, key: string, value: string): string {
    let completeUrl = url;
    
    if (value) {
      if (completeUrl.indexOf("?") < 0) {
        completeUrl += "?";
      }
      
      if (completeUrl.indexOf("?") > 0 && !completeUrl.endsWith("?") && !completeUrl.endsWith("&")) {
        completeUrl += "&" + key + "=" + value;
      } else {
        completeUrl += key + "=" + value;
      }
    }
    
    return completeUrl;
  }

  private handleErrors<T>(eventType: QueryEventType, response?: T): (error: any) => T {
    return (error: any): T => {
      let errorResponse = error.error;

      if (errorResponse) {
        switch(errorResponse.status) {
          default: break;
        }
      }

      this.queryEventService.notifyEvent({ type: eventType, status: QueryEventStatus.ERROR });
      return response as T;
    }
  }
}
