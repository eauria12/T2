import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLineasComponent } from './lista-lineas.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

describe('ListaLineasComponent', () => {
  let component: ListaLineasComponent;
  let fixture: ComponentFixture<ListaLineasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatCardModule, MatListModule],
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
