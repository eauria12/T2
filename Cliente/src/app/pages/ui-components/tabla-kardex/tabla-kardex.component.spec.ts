import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaKardexComponent } from './tabla-kardex.component';

describe('TablaKardexComponent', () => {
  let component: TablaKardexComponent;
  let fixture: ComponentFixture<TablaKardexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaKardexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaKardexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
