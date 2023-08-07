import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ObtenerKardexService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  async getKardexSafe(LocalesEscogidos: number[], codigoDesde: String, codigoHasta: String, fechaDesde: Date, fechaHasta: Date, nivel: String, Stock: String) {
    const bodyenvio = {
      "locales": this.StringLocales(LocalesEscogidos),
      "formatoNivel": nivel,
      "itemSinMovimientos": Stock,
      "codigoDesde": codigoDesde,
      "codigoHasta": codigoHasta,
      "fechaDesde": this.StringFecha(fechaDesde),
      "fechaHasta": this.StringFecha(fechaHasta)
    };
    return new Promise<any>((resolve, reject) => {
      this.http.post("http://oasysweb.saia.com.ec/andina/api/inventario/reportes/kardex", bodyenvio)
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

  private StringFecha(fecha: Date) {
    var dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let yyy = fecha.getFullYear();
    let fechaInicioEnviar = yyy + "/" + mes + "/" + dia;
    console.log(fechaInicioEnviar)
    return fechaInicioEnviar
  }


}
