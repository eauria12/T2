import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { TablasComponent } from './tablas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ObtenerSaldosInventarioService } from 'src/app/services/obtener-saldos-inventario.service';

describe('TablasComponent', () => {
  let component: TablasComponent;
  let fixture: ComponentFixture<TablasComponent>;
  let ObtSaldos: ObtenerSaldosInventarioService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, HttpClientModule, FormsModule],
      declarations: [TablasComponent],
      providers: [ObtenerSaldosInventarioService],
    })
    
    fixture = TestBed.createComponent(TablasComponent);
    component = fixture.componentInstance;
    ObtSaldos = TestBed.inject(ObtenerSaldosInventarioService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Cantidad de parametros', () => {
    component.localesMostrar = [82];
    component.lineasMostrar = [11];
    fixture.detectChanges();
    console.log(component.SaldosInventario)
    expect(component.SaldosInventario.length).toBe(12); // Llamar al método getIsAuthenticated()
  });
});
