import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ObtenerSaldosInventarioService } from './obtener-saldos-inventario.service';

describe('ObtenerSaldosInventarioService', () => {
  let service: ObtenerSaldosInventarioService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }).compileComponents();
    service = TestBed.inject(ObtenerSaldosInventarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
