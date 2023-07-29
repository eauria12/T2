import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLocalesComponent } from './select-locales.component';

describe('SelectLocalesComponent', () => {
  let component: SelectLocalesComponent;
  let fixture: ComponentFixture<SelectLocalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectLocalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectLocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
