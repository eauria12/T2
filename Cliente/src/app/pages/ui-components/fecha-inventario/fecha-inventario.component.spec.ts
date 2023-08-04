import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaInventarioComponent } from './fecha-inventario.component';

describe('FechaInventarioComponent', () => {
  let component: FechaInventarioComponent;
  let fixture: ComponentFixture<FechaInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechaInventarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechaInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
