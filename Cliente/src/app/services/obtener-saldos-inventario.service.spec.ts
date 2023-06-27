import { TestBed } from '@angular/core/testing';

import { ObtenerSaldosInventarioService } from './obtener-saldos-inventario.service';

describe('ObtenerSaldosInventarioService', () => {
  let service: ObtenerSaldosInventarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerSaldosInventarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
