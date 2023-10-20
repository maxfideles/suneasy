import { TestBed } from '@angular/core/testing';

import { InvertersService } from './inverters.service';

describe('InvertersService', () => {
  let service: InvertersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvertersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
