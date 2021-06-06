import { TestBed } from '@angular/core/testing';

import { PcpartspageService } from './pcpartspage.service';

describe('PcpartspageService', () => {
  let service: PcpartspageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcpartspageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
