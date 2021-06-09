import { TestBed } from '@angular/core/testing';

import { ProPathService } from './pro-path.service';

describe('ProPathService', () => {
  let service: ProPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
