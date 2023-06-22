import { TestBed } from '@angular/core/testing';

import { ObtenerListasService } from './obtener-listas.service';

describe('ObtenerListasService', () => {
  let service: ObtenerListasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerListasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
