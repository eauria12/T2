import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPreciosExistenciaComponent } from './lista-precios-existencia.component';

describe('ListaPreciosExistenciaComponent', () => {
  let component: ListaPreciosExistenciaComponent;
  let fixture: ComponentFixture<ListaPreciosExistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPreciosExistenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPreciosExistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
