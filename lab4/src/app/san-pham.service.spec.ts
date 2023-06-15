import { TestBed } from '@angular/core/testing';

import { SanPhamService } from './san-pham.service';

describe('SanPhamService', () => {
  let service: SanPhamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanPhamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
