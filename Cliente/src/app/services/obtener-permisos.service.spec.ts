import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ObtenerPermisosService } from './obtener-permisos.service';

describe('ObtenerPermisosService', () => {
  let service: ObtenerPermisosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }).compileComponents();
    service = TestBed.inject(ObtenerPermisosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
