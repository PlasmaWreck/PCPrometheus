import { TestBed } from '@angular/core/testing';

import { PrometheusapiService } from './prometheusapi.service';

describe('PrometheusapiService', () => {
  let service: PrometheusapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrometheusapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
