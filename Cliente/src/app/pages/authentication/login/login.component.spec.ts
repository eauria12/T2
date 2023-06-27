import { ComponentFixture, TestBed, async, waitForAsync } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { AppSideLoginComponent } from './login.component'

describe('TablasComponent', () => {
  let component: AppSideLoginComponent;
  let fixture: ComponentFixture<AppSideLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [AppSideLoginComponent],
    })
    
    fixture = TestBed.createComponent(AppSideLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Inciar sesion correctamente ', waitForAsync(() => {
    expect(component).toBeTruthy();
  }));
});
