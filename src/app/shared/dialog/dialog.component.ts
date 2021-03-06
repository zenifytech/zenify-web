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
        if (event && (event.status === QueryEventStatus.COMPLETED || event.status === QueryEventStatus.ERROR)) {
          this.dialog.open(ResultDialogComponent, {
            data: {
              header: this.getResultHeader(event.type, event.status),
              message: this.getResultMessage(event.type, event.status)
            },
            panelClass: 'zen-result-dialog'
          });
        }
      });
  }

  private getResultHeader(type: QueryEventType, status: QueryEventStatus) {
    switch(type) {
      case QueryEventType.SEND_MESSAGE: {
        return (status === QueryEventStatus.COMPLETED) ? Messages.RESULT_HEADER_SEND_INBOX_SUCCESS : Messages.RESULT_HEADER_SEND_INBOX_ERROR;
      }
    }
  }

  private getResultMessage(type: QueryEventType, status: QueryEventStatus) {
    switch(type) {
      case QueryEventType.SEND_MESSAGE: {
        return (status === QueryEventStatus.COMPLETED) ? Messages.RESULT_MESSAGE_SEND_INBOX_SUCCESS : Messages.RESULT_MESSAGE_ERROR;
      }
      default: {
        if (status === QueryEventStatus.ERROR) {
          return Messages.RESULT_MESSAGE_ERROR;
        }
      }
    }
  }
}
