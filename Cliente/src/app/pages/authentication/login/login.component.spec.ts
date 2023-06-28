import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { AppSideLoginComponent } from './login.component'
import { FormsModule } from '@angular/forms';

describe('TablasComponent', () => {
  let component: AppSideLoginComponent;
  let fixture: ComponentFixture<AppSideLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, HttpClientModule,FormsModule],
      declarations: [AppSideLoginComponent],
    })
    
    fixture = TestBed.createComponent(AppSideLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Inciar sesion correctamente ',() => {
    (<HTMLInputElement>document.getElementById('user')).value = 'RALCIVAR';
    (<HTMLInputElement>document.getElementById('pass')).value = 'ra2012';
    (<HTMLInputElement>document.getElementById('local')).value = '80';
    component.login();
    expect(component.acceso).toBe(true);
  });
});
