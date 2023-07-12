import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // El usuario ha iniciado sesión, permite el acceso a la ruta
    } else {
      this.router.navigate(['/authentication/login']);
      return false;
    }
  }
}