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
  equipoNombre:string;
  acceso: boolean = false;
  constructor(private authService: AuthService, private router: Router,private localIdService: LocalIdService) { }


  onSubmit(): void {
    this.authService.login(this.usuarioId, this.clave,1,this.localId,"",this.usuarioId)
      .pipe(
        tap((response) => {
          const token = response.result; 
          this.authService.setToken(token);
          this.localIdService.setLocalId(response.agencia.id);
          this.router.navigate(['/saldo-inventario']);

        }),
        catchError(error => {
          this.errorMessage = 'Las credenciales son incorrectas. Por favor, intenta nuevamente.';
          return of(null);
        })
        
      )
      .subscribe();
  }
}
