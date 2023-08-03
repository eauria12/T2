import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLineasComponent } from './select-lineas.component';

describe('SelectLineasComponent', () => {
  let component: SelectLineasComponent;
  let fixture: ComponentFixture<SelectLineasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectLineasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectLineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
