import { TestBed } from '@angular/core/testing';

import { DuLieuService } from './du-lieu.service';

describe('DuLieuService', () => {
  let service: DuLieuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuLieuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
