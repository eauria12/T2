
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RealizarPeticionesAsincronasSafeService {

  constructor(private http: HttpClient) { }

  async realizarPostAsincronoSeguro(body: object, Url: string) {
    return new Promise<any>((resolve, reject) => {
      this.http.post( Url, body)
        .pipe(catchError((error) => of(error)))
        .subscribe((res) => {
          if (res instanceof HttpErrorResponse)
            reject({ error: res.error, status: res.status });
          else
            resolve(res);
        });
    });
  }

  async realizarGetAsincronoSeguro( Url: string) {
    return new Promise<any>((resolve, reject) => {
      this.http.get(Url)
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
