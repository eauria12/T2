import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisionEstablComponent } from './emision-establ.component';

describe('EmisionEstablComponent', () => {
  let component: EmisionEstablComponent;
  let fixture: ComponentFixture<EmisionEstablComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmisionEstablComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmisionEstablComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
