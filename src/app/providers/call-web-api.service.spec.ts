import { TestBed, inject } from '@angular/core/testing';

import { CallWebApiService } from './call-web-api.service';

describe('CallWebApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CallWebApiService]
    });
  });

  it('should be created', inject([CallWebApiService], (service: CallWebApiService) => {
    expect(service).toBeTruthy();
  }));
});
