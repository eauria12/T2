import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ObtenerSaldosInventarioService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  async getSaldosInventarioSafe(LocalesEscogidos: number[], LineasEscogidas: number[]) {
    const bodyenvio = {
      "locales": this.StringLocales(LocalesEscogidos),
      "lineas": this.StringLineas(LineasEscogidas),
      "formatoNivel": "N",
      "formatoLineaArticulo": "L",
      "formatoPresentacion": "L",
      "codigoDesde": "",
      "codigoHasta": ""
    };
    return new Promise<any>((resolve, reject) => {
      this.http.post("http://oasysweb.saia.com.ec/andina/api/inventario/reportes/saldosListar", bodyenvio)
        .pipe(catchError((error) => of(error)))
        .subscribe((res) => {
          if (res instanceof HttpErrorResponse)
            reject({ error: res.error, status: res.status });
          else
            resolve(res);
        });
    });
  }

  async getTodosSaldosInventarioSafe(LocalesEscogidos: number[], LineasEscogidas: String) {
    const bodyenvio = {
      "locales": this.StringLocales(LocalesEscogidos),
      "lineas": LineasEscogidas,
      "formatoNivel": "N",
      "formatoLineaArticulo": "L",
      "formatoPresentacion": "L",
      "codigoDesde": "",
      "codigoHasta": ""
    };
    return new Promise<any>((resolve, reject) => {
      this.http.post("http://oasysweb.saia.com.ec/andina/api/inventario/reportes/saldosListar", bodyenvio)
        .pipe(catchError((error) => of(error)))
        .subscribe((res) => {
          if (res instanceof HttpErrorResponse)
            reject({ error: res.error, status: res.status });
          else
            resolve(res);
        });
    });
  }

  private StringLocales(LocalesEscogidos: number[]) {
    return LocalesEscogidos.join(",");
  }
  private StringLineas(LineasEscogidas: number[]) {
    return LineasEscogidas.join(",");
  }
}
