import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private isAuthenticated = false; // Estado de autenticación inicial

  private apiUrl = 'http://oasysweb.saia.com.ec/andina/api/seguridad/acceso'; // Reemplaza con la URL del recurso externo

  constructor(private http: HttpClient) { }
  
  login( usuarioId: string, clave: string, empresaId:number,localId:number, equipoIP:string, equipoNombre:string): Observable<any> 
  {  
    const body = { usuarioId: usuarioId, clave: clave,empresaId:empresaId,localId:localId,equipoIP:equipoIP,equipoNombre:equipoNombre };
    return this.http.post<any>(`${this.apiUrl}/login`, body).pipe(
      tap((response => {
        this.isAuthenticated = true;
      })
    ));
  }


  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
  
  setIsAuthenticated(value: boolean) {
    this.isAuthenticated = value;
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  storeToken(token: string) {
    localStorage.setItem('token', token);
  }
}

