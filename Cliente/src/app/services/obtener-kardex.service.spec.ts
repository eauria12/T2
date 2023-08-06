import { TestBed } from '@angular/core/testing';

import { ObtenerKardexService } from './obtener-kardex.service';

describe('ObtenerKardexService', () => {
  let service: ObtenerKardexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerKardexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
