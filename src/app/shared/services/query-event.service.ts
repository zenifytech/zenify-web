import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { QueryEvent } from '../models/query-event';

@Injectable({
  providedIn: 'root'
})
export class QueryEventService {

  private _queryEvent = new BehaviorSubject<QueryEvent>(undefined);

  constructor() { }

  public notifyEvent(event: QueryEvent) {
    this._queryEvent.next(event);
  }

  public get event(): Observable<QueryEvent> {
    return this._queryEvent.asObservable();
  }
}
