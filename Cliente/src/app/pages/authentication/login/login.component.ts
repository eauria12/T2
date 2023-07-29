import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LocalIdService } from 'src/app/services/resources/local.service';

import { of } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  errorMessage: string;
  isAuthenticated: boolean ;
  usuarioId: string
  clave: string; 
  empresaId:1;
  localId:number;
  equipoIP:"";
  equipoNombre:"RALCIVAR";
  acceso: boolean = false;
  constructor(private authService: AuthService, private router: Router,private localIdService: LocalIdService) { }


  onSubmit(): void {
    this.authService.login(this.usuarioId, this.clave,1,this.localId,"","RALCIVAR")
      .pipe(
        tap((response) => {
          const token = response.result; // Ajusta el acceso al token según la respuesta de la API
          this.authService.setToken(token);
          //guarda el local
          this.localIdService.setLocalId(response.agencia.id);
          // Redirige al usuario a la siguiente página
          this.router.navigate(['/saldo-inventario']);

        }),
        catchError(error => {
          // Manejar el error de inicio de sesión
          this.errorMessage = 'Las credenciales son incorrectas. Por favor, intenta nuevamente.';
          return of(null);
        })
        
      )
      .subscribe();
  }
}
