import { TestBed } from '@angular/core/testing';

import { RealizarPeticionesAsincronasSafeService } from './realizar-peticiones-asincronas-safe.service';

describe('RealizarPeticionesAsincronasSafeService', () => {
  let service: RealizarPeticionesAsincronasSafeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealizarPeticionesAsincronasSafeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
