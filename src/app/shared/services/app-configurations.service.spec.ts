import { TestBed } from '@angular/core/testing';

import { AppConfigurationsService } from './app-configurations.service';

describe('AppConfigurationsService', () => {
  let service: AppConfigurationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppConfigurationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
