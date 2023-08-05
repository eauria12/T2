import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Linea } from '../interfaces/linea';


@Injectable({
  providedIn: 'root'
})
export class ObtenerListasService {

  constructor(private http: HttpClient, private auth: AuthService) {   }

  async getListaZonasSafe() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.getToken());
    return new Promise<any>((resolve, reject) => {
      this.http.get("http://oasysweb.saia.com.ec/andina/api/info/zona/lista")
        .pipe(catchError((error) => of(error)))
        .subscribe((res) => {
          if (res instanceof HttpErrorResponse)
            reject({ error: res.error, status: res.status });
          else
            resolve(res);
        });
    });
  }

  async getListaLocalesSafe() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.getToken());
    return new Promise<any>((resolve, reject) => {
      this.http.get("http://oasysweb.saia.com.ec/andina/api/info/local/lista")
        .pipe(catchError((error) => of(error)))
        .subscribe((res) => {
          if (res instanceof HttpErrorResponse)
            reject({ error: res.error, status: res.status });
          else
            resolve(res);
        });
    });
  }

  async getListaLineasSafe() {
    const headers = new HttpHeaders().set('Authorization','Bearer ' + this.auth.getToken());
    return new Promise<any>((resolve, reject) => {
      this.http.get("http://oasysweb.saia.com.ec/andina/api/info/linea/lista")
        .pipe(catchError((error) => of(error)))
        .subscribe((res) => {
          if (res instanceof HttpErrorResponse)
            reject({ error: res.error, status: res.status });
          else
            resolve(res);
        });
    });
  }

  async getListaPorRangoLineasSafe(lineas: String) {
    return new Promise<any>((resolve, reject) => {
      this.http.get("http://oasysweb.saia.com.ec/andina/api/info/linea/listaPorRango/"+lineas)
        .pipe(catchError((error) => of(error)))
        .subscribe((res) => {
          if (res instanceof HttpErrorResponse)
            reject({ error: res.error, status: res.status });
          else
            resolve(res);
        });
    });
  }

}
