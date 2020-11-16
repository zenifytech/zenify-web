import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { QueryEventStatus } from '../enums/query-event-status.enum';
import { QueryEventType } from '../enums/query-event-type.enum';
import { Messages } from '../messages';
import { QueryEventService } from '../services/query-event.service';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';

@UntilDestroy()
@Component({
  selector: 'zen-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  private _hideDialogsOnEvent = [
    QueryEventType.DOMAIN_CHECK,
    QueryEventType.SIGNIN_PROPRIETOR,
    QueryEventType.SIGNIN_ASSOCIATE,
    QueryEventType.FEDERATE_PROPRIETOR,
    QueryEventType.FEDERATE_ASSOCIATE,
    QueryEventType.SIGNOUT
  ]

  constructor(
    private dialog: MatDialog,
    private queryEventService: QueryEventService
  ) { }

  ngOnInit(): void {
    this.subscribeToQueryEvents();
  }

  private subscribeToQueryEvents() {
    this.queryEventService.event
      .pipe(untilDestroyed(this))
      .subscribe(event => {
        if (event && (event.status === QueryEventStatus.COMPLETED || event.status === QueryEventStatus.ERROR)
          && !this._hideDialogsOnEvent.includes(event.type)) {
          this.dialog.open(ResultDialogComponent, {
            data: {
              header: this.getResultHeader(event.type, event.status),
              message: this.getResultMessage(event.type, event.status)
            }
          });
        }
      });
  }

  private getResultHeader(type: QueryEventType, status: QueryEventStatus) {
    switch(type) {
      case QueryEventType.SIGNUP_ASSOCIATE:
      case QueryEventType.SIGNUP_PROPRIETOR: {
        return (status === QueryEventStatus.COMPLETED) ? Messages.RESULT_HEADER_SIGNUP_SUCCESS : Messages.RESULT_HEADER_SIGNUP_ERROR;
      }
    }
  }

  private getResultMessage(type: QueryEventType, status: QueryEventStatus) {
    switch(type) {
      case QueryEventType.SIGNUP_ASSOCIATE:
      case QueryEventType.SIGNUP_PROPRIETOR: {
        return (status === QueryEventStatus.COMPLETED) ? Messages.RESULT_MESSAGE_SIGNUP_SUCCESS : Messages.RESULT_MESSAGE_SIGNUP_ERROR;
      }
      default: {
        if (status === QueryEventStatus.ERROR) {
          return Messages.RESULT_MESSAGE_ERROR;
        }
      }
    }
  }
}
