import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { AppSideLoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication.service';
import { HeaderComponent } from 'src/app/layouts/full/header/header.component';
import { RouteConfigLoadStart } from '@angular/router';

describe('TablasComponent', () => {
  let component: AppSideLoginComponent;
  let authService: AuthenticationService;
  let fixture: ComponentFixture<AppSideLoginComponent>;
  let headers: HeaderComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, HttpClientModule, FormsModule],
      declarations: [AppSideLoginComponent],
      providers: [AuthenticationService],
    }).compileComponents();

    fixture = TestBed.createComponent(AppSideLoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthenticationService);
    //headers = TestBed.inject(HeaderComponent); // Inicializar authService
    fixture.detectChanges();
  });

  afterEach(() => {
    //headers.cerrarSesion();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Iniciar sesion correctamente', () => {
    component.usuarioId = 'RALCIVAR';
    component.clave = 'ra2012';
    component.localId = 80;
    component.login();
    console.log('Iniciar sesion correctamente-----------------')
    console.log(authService.getToken()?.toString)
    expect(authService.getToken()).not.toBe(null); // Llamar al método getIsAuthenticated()
  });

  it('Inicio incorrecto: Usuario Incorrecto', () => {
    component.usuarioId = 'RALCIVA';
    component.clave = 'ra2012';
    component.localId = 80;
    component.login();
    console.log('Inicio incorrecto: Usuario Incorrecto-----------------')
    console.log(authService.getToken()?.toString)
    expect(authService.getToken()).toBe(null); // Llamar al método getIsAuthenticated()
  });

  it('Inicio incorrecto: Clave Incorrecta', () => {
    component.usuarioId = 'RALCIVAR';
    component.clave = 'r2012';
    component.localId = 80;
    component.login();
    console.log('Inicio incorrecto: Clave Incorrecta-----------------')
    console.log(authService.getToken()?.toString)
    expect(authService.getToken()).toBe(null); // Llamar al método getIsAuthenticated()
  });

});