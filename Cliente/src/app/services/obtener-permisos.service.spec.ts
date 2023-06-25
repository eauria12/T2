import { TestBed } from '@angular/core/testing';

import { ObtenerPermisosService } from './obtener-permisos.service';

describe('ObtenerPermisosService', () => {
  let service: ObtenerPermisosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerPermisosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
