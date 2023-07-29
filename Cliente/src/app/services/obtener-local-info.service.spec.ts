import { TestBed } from '@angular/core/testing';

import { ObtenerLocalInfoService } from './obtener-local-info.service';

describe('ObtenerLocalInfoService', () => {
  let service: ObtenerLocalInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerLocalInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
