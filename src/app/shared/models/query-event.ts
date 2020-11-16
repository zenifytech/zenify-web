import { QueryEventStatus } from '../enums/query-event-status.enum';
import { QueryEventType } from '../enums/query-event-type.enum';

export class QueryEvent {
    type: QueryEventType
    status: QueryEventStatus
}