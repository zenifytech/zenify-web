import { TestBed } from '@angular/core/testing';

import { QueryEventService } from './query-event.service';

describe('QueryEventService', () => {
  let service: QueryEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
