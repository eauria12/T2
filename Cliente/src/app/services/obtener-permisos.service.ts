import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service'
import { Permiso } from 'src/app/interfaces/permiso';

@Injectable({
  providedIn: 'root'
})
export class ObtenerPermisosService {

  private listaPermisos: Permiso[] = [];
  private listaLocales: number[] = [];

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

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
