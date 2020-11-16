import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { QueryEventType } from '../enums/query-event-type.enum';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router) { }

  canActivate(): boolean {
    if (!localStorage.getItem("user.uid")) {
      this.router.navigateByUrl("");
      return false;
    }

    console.debug("Federating " + localStorage.getItem("user.domain") + " account");
    this.authService.federate(localStorage.getItem("user.domain") === 'BUSINESS' ? QueryEventType.FEDERATE_PROPRIETOR : QueryEventType.FEDERATE_ASSOCIATE);
    return true;
  }
}
