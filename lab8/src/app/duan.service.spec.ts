import { TestBed } from '@angular/core/testing';

import { DuanService } from './duan.service';

describe('DuanService', () => {
  let service: DuanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
