import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLocalesComponent } from './lista-locales.component';

describe('ListaLocalesComponent', () => {
  let component: ListaLocalesComponent;
  let fixture: ComponentFixture<ListaLocalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
