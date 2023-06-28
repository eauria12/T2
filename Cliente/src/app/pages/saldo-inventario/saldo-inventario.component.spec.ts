import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { SaldoInventarioComponent } from './saldo-inventario.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ListaLocalesComponent } from '../ui-components/lists/lista-locales/lista-locales.component';
import { HttpClientModule } from '@angular/common/http';
import { TablasComponent } from '../ui-components/tablas/tablas.component';
import { ListaLineasComponent } from '../ui-components/lists/lista-lineas/lista-lineas.component';

describe('SaldoInventarioComponent', () => {
  let component: SaldoInventarioComponent;
  let fixture: ComponentFixture<SaldoInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, MatIconModule, MatListModule, HttpClientModule],
      declarations: [ SaldoInventarioComponent, ListaLocalesComponent, TablasComponent, ListaLineasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaldoInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
