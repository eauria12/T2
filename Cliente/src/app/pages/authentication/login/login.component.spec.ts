import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { AppSideLoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';


describe('Login', () => {
  let component: AppSideLoginComponent;
  let authService: AuthenticationService;
  let fixture: ComponentFixture<AppSideLoginComponent>;
  let navigateSpy: jasmine.Spy;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, HttpClientModule, FormsModule, RouterTestingModule],
      declarations: [AppSideLoginComponent],
      providers: [AuthenticationService],
    }).compileComponents();

    fixture = TestBed.createComponent(AppSideLoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthenticationService);
    navigateSpy = spyOn(TestBed.inject(Router), 'navigate');
    fixture.detectChanges();
    
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Inicio incorrecto: Usuario Incorrecto', waitForAsync(() => {
    component.usuarioId = 'RALCIVA';
    component.clave = 'ra2012';
    component.localId = 80;
    component.login();
    console.log('Inicio incorrecto: Usuario Incorrecto-----------------')
    console.log(authService.getToken()?.toString)
    expect(authService.getToken()).toBe(null); // Llamar al método getIsAuthenticated()
    
  }));

  it('Inicio incorrecto: Clave Incorrecta', waitForAsync(() => {
    component.usuarioId = 'RALCIVAR';
    component.clave = 'r2012';
    component.localId = 80;
    component.login();
    console.log('Inicio incorrecto: Clave Incorrecta-----------------')
    console.log(authService.getToken()?.toString)
    expect(authService.getToken()).toBe(null); // Llamar al método getIsAuthenticated()
    
  }));

  it('Iniciar sesion correctamente', waitForAsync(() => {
    component.usuarioId = 'RALCIVAR';
    component.clave = 'ra2012';
    component.localId = 80;
    component.login();
    console.log('Iniciar sesion correctamente-----------------')
    console.log(authService.getToken()?.toString)
    expect(authService.getToken()).not.toEqual(null); // Llamar al método getIsAuthenticated()
  }));


});