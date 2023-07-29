import { TestBed } from '@angular/core/testing';

import { LocalIdService } from './local.service';

describe('LocalService', () => {
  let service: LocalIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
