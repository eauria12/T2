import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  isAuthenticated: boolean ;
  usuarioId: string
  clave: string; 
  empresaId:1;
  localId:number;
  equipoIP:"";
  equipoNombre:"RALCIVAR";
  acceso: boolean = false;

  constructor(private authenticationService: AuthenticationService,
    private router: Router
    ) {}


   login() {
    this.authenticationService.login(this.usuarioId, this.clave,1,this.localId,"","RALCIVAR").pipe(
      tap(response => {
        // Realizar acciones adicionales según la respuesta del recurso externo  
        this.authenticationService.setIsAuthenticated(true); // Actualizar estado de autenticación
        this.acceso = true;
        console.log(response.result)
        this.authenticationService.storeToken(response.result);
        this.router.navigate(['/saldo-inventario']); // Redirigir al usuario a la ruta deseada /ui-components/badge

        // Redireccionar a la página principal o a otra ruta deseada
      }),
      catchError(error => {
        // Manejar el error de inicio de sesión
        console.error('Error de inicio de sesión:', error);
        return of(null);
      })
    )
    .subscribe();
    
    
  }



}
