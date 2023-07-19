import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { ListadoFacturasEntregasPendientesComponent } from './listado-facturas-entregas-pendientes.component';

describe('ListadoFacturasEntregasPendientesComponent', () => {
  let component: ListadoFacturasEntregasPendientesComponent;
  let fixture: ComponentFixture<ListadoFacturasEntregasPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoFacturasEntregasPendientesComponent ],
      imports: [MatCardModule, MatIconModule, MatListModule, HttpClientModule,MatInputModule,MatFormFieldModule],

    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoFacturasEntregasPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
