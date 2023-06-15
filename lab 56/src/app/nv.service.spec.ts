import { TestBed } from '@angular/core/testing';

import { NvService } from './nv.service';

describe('NvService', () => {
  let service: NvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
