import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoArticuloComponent } from './codigo-articulo.component';

describe('CodigoArticuloComponent', () => {
  let component: CodigoArticuloComponent;
  let fixture: ComponentFixture<CodigoArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoArticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigoArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
