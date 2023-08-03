import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ObtenerListaPreciosExistenciaService } from './obtener-lista-precios-existencia.service';

describe('ObtenerListaPreciosExistenciaService', () => {
  let service: ObtenerListaPreciosExistenciaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }).compileComponents();
      service = TestBed.inject(ObtenerListaPreciosExistenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


