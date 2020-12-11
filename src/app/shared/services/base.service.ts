import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { QueryEventStatus } from '../enums/query-event-status.enum';
import { QueryEventType } from '../enums/query-event-type.enum';
import { InboxMessage } from '../models/inbox-message';
import { QueryEventService } from './query-event.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private _serviceUrl: string;

  constructor(
    private http: HttpClient,
    private queryEventService: QueryEventService
  ) {
    this._serviceUrl = environment.serviceUrl;
  }

  public ping() {
    this.http.get(this._serviceUrl + '/base/version')
    .subscribe((result: any) => {
      if (result) {
        console.debug("Established connection successfully", result.value);
      }
    });
  }

  public sendMessage(message: InboxMessage) {
    const type = QueryEventType.SEND_MESSAGE;
    this.queryEventService.notifyEvent({type: type, status: QueryEventStatus.IN_PROGRESS});

    this.http.post(this._serviceUrl + '/base/v1/inbox/send-message', message)
      .pipe(catchError(this.handleErrors(type, [])))
      .subscribe(result => {
        this.queryEventService.notifyEvent({type: type, status: QueryEventStatus.COMPLETED});
      });
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
