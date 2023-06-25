import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { TablasComponent } from './tablas.component';

describe('TablasComponent', () => {
  let component: TablasComponent;
  let fixture: ComponentFixture<TablasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [TablasComponent],
    })
    
    fixture = TestBed.createComponent(TablasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
