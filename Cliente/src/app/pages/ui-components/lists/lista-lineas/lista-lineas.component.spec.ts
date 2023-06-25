import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLineasComponent } from './lista-lineas.component';

describe('ListaLineasComponent', () => {
  let component: ListaLineasComponent;
  let fixture: ComponentFixture<ListaLineasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaLineasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaLineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
