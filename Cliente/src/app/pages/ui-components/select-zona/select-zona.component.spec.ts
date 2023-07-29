import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectZonaComponent } from './select-zona.component';

describe('SelectZonaComponent', () => {
  let component: SelectZonaComponent;
  let fixture: ComponentFixture<SelectZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectZonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
