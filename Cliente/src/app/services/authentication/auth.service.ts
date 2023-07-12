import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://oasysweb.saia.com.ec/andina/api/seguridad/acceso'; // Reemplaza con la URL de la API externa

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(usuarioId: string, clave: string,empresaId:number,localId:number,equipoIP:string,equipoNombre:string): Observable<any> {
    const body = { usuarioId, clave, empresaId,localId,equipoIP,equipoNombre };
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  setToken(token: string): void {
    this.cookieService.set('token', token);
  }

  getToken(): string {
    return this.cookieService.get('token');
  }
/*
  removeToken(): void {
    this.cookieService.delete('token');
  }
*/
  isLoggedIn(): boolean {
    const token = this.cookieService.get('token');
    return !!token; // Devuelve true si hay un token válido, de lo contrario, devuelve false
  }
  logout(): void {
    this.cookieService.delete('token'); // Elimina la cookie del token
    // Realiza cualquier otra acción de limpieza o cierre de sesión necesaria
  }
}
