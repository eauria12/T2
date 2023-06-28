import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLocalesComponent } from './lista-locales.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

describe('ListaLocalesComponent', () => {
  let component: ListaLocalesComponent;
  let fixture: ComponentFixture<ListaLocalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatListModule, MatCardModule],
      declarations: [ ListaLocalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaLocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
