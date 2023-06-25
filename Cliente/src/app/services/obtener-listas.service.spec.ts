import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ObtenerListasService } from './obtener-listas.service';

describe('ObtenerListasService', () => {
  let service: ObtenerListasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }).compileComponents();
    service = TestBed.inject(ObtenerListasService);
  });
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
