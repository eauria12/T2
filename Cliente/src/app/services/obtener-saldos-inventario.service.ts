import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service'

@Injectable({
  providedIn: 'root'
})
export class ObtenerSaldosInventarioService {

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  async getSaldosInventarioSafe(LocalesEscogidos: number[],LineasEscogidas: number[] ) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.getToken());
    const body = {
      "locales": this.StringLocales(LocalesEscogidos),
      "lineas": this.StringLineas(LineasEscogidas),
      "formatoNivel": "N",
      "formatoLineaArticulo": "L",
      "formatoPresentacion": "L",
      "codigoDesde": "",
      "codigoHasta": ""
    };
    const options = {
      headers: headers,
      params: new HttpParams({ fromObject: body })
    }
    return new Promise<any>((resolve, reject) => {
      this.http.get("http://oasysweb.saia.com.ec/andina/api/info/local/lista",options)
        .pipe(catchError((error) => of(error)))
        .subscribe((res) => {
          if (res instanceof HttpErrorResponse)
            reject({ error: res.error, status: res.status });
          else
            resolve(res);
        });
    });
  }

  private StringLocales(LocalesEscogidos: number[] ) {
    return LocalesEscogidos.join(",");
  }
  private StringLineas(LineasEscogidas: number[] ) {
    return LineasEscogidas.join(",");
  }
}
