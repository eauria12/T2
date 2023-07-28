import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Permiso } from 'src/app/interfaces/permiso';

@Injectable({
  providedIn: 'root'
})
export class ObtenerPermisosService {

  private listaPermisos: Permiso[] = [];
  private listaLocales: number[] = [];

  constructor(private http: HttpClient, private auth: AuthService) { }

  async permisosDisponibles(servicio: String) {
    this.listaPermisos = await this.getPermisosSafe(servicio);
    let codigoPermiso = this.listaPermisos.map(permiso => this.obtenerCodigoPermiso(permiso.nivelId));
    return codigoPermiso;
  }

  async localesDisponibles(servicio: String) {
    this.listaPermisos = await this.getPermisosSafe(servicio);
    let listaLocalestemp = this.listaPermisos[0].locales;
    this.listaLocales = listaLocalestemp.split(",").map(numero => Number(numero));
    return this.listaLocales
  }

  async lineasDisponibles(servicio: String) {
    this.listaPermisos = await this.getPermisosSafe(servicio);
    let listaLineastemp = this.listaPermisos[0].lineas;
    return listaLineastemp; 
  }

  async permisosNivel(servicio: String) {
    this.listaPermisos = await this.getPermisosSafe(servicio);
    const booleanos: boolean[] = [false,false,false];
    this.listaPermisos.forEach((elemento) => {
      const nivelId = elemento.nivelId.toString();
      const ultimosDosDigitos = nivelId.slice(-2);
      if (ultimosDosDigitos === "50" ) {
        booleanos[0]=true;
      }
      if (ultimosDosDigitos === "51" ) {
        booleanos[1]=true;
      }
      if (ultimosDosDigitos === "54" ) {
        booleanos[2]=true;
      }
    });
    return booleanos;
  }

  async getPermisosSafe(servicio: String) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.getToken());
    return new Promise<any>((resolve, reject) => {
      this.http.get("http://oasysweb.saia.com.ec/andina/api/seguridad/nivel/" + servicio)
        .pipe(catchError((error) => of(error)))
        .subscribe((res) => {
          if (res instanceof HttpErrorResponse)
            reject({ error: res.error, status: res.status });
          else
            resolve(res);
        });
    });
  }

  private obtenerCodigoPermiso(nivelId: string): string {
    const ultimosNumeros = nivelId.slice(-2);
    return ultimosNumeros.toString();
  }

}
