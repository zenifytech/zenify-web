import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { QueryEventType } from 'src/app/shared/enums/query-event-type.enum';
import { UserAccount } from 'src/app/shared/models/user-account';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { QueryEventService } from 'src/app/shared/services/query-event.service';

@UntilDestroy()
@Component({
  selector: 'zen-lounge-header',
  templateUrl: './lounge-header.component.html',
  styleUrls: ['./lounge-header.component.scss']
})
export class LoungeHeaderComponent implements OnInit {

  public _user: UserAccount;
  public _userInitials: string;

  constructor(
    private authService: AuthenticationService,
    private queryEventService: QueryEventService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscribeToQueryEvents();
    this.subscribeToAuthUser();
  }

  public signOut() {
    this.authService.signOut();
  }

  private subscribeToAuthUser() {
    this.authService.currentUser
      .pipe(untilDestroyed(this))
      .subscribe(user => {
        this._user = user;
        if (this._user) {
          this._userInitials = this._user.firstName[0].toUpperCase() + this._user.lastName[0].toUpperCase();
        }
      });
  }

  private subscribeToQueryEvents() {
    this.queryEventService.event
      .pipe(untilDestroyed(this))
      .subscribe(event => {
        if (event) {
          switch (event.type) {
            case QueryEventType.SIGNOUT: {
              this.router.navigateByUrl("");
              break;
            }
            default: break;
          }
        }
      });
  }
}
