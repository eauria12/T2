import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ObtenerListasService {

  constructor(private http: HttpClient) { }

  async getListaLocalesSafe(crypto: String) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlJBTENJVkFSIiwidXN1YXJpb0lkIjoiUkFMQ0lWQVIiLCJub21icmUiOiJST0JFUlRPIEFMQ0lWQVIgRy4iLCJlbXByZXNhSWQiOiIxIiwibG9jYWxJZCI6IjgwIiwiZW1wcmVzYU5vbWJyZSI6IlMuQS4gSU1QT1JUQURPUkEgQU5ESU5BIFMuQS5JLkEuIiwibG9jYWxOb21icmUiOiJMT0NBTCA4MCAvIE1BVFJJWiBHWUUiLCJjb3JyZW9FbGVjdHJvbmljbyI6IiIsInJlaW5pY2lhQ2xhdmUiOiJOIiwidmVyaWZpY2FQZXJtaXNvcyI6IlMiLCJ2ZXJpZmljYUVxdWlwbyI6Ik4iLCJtdWx0aVNlc2lvbiI6IlMiLCJlcXVpcG9Ob21icmUiOiJSQUxDSVZBUiIsImVxdWlwb0lQIjoiIiwiZXF1aXBvRmVjaGEiOiIyMDIzLzA2LzE4IDExOjI5OjE3IiwibmJmIjoxNjg3MTA1NzU3LCJleHAiOjE2ODc3MTA1NTcsImlhdCI6MTY4NzEwNTc1N30.7hTwr4l1395R_9IDHtytvlWiFcUfdq6iAM9SrouS1Ko');
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

  async getListaLineasSafe(crypto: String) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlJBTENJVkFSIiwidXN1YXJpb0lkIjoiUkFMQ0lWQVIiLCJub21icmUiOiJST0JFUlRPIEFMQ0lWQVIgRy4iLCJlbXByZXNhSWQiOiIxIiwibG9jYWxJZCI6IjgwIiwiZW1wcmVzYU5vbWJyZSI6IlMuQS4gSU1QT1JUQURPUkEgQU5ESU5BIFMuQS5JLkEuIiwibG9jYWxOb21icmUiOiJMT0NBTCA4MCAvIE1BVFJJWiBHWUUiLCJjb3JyZW9FbGVjdHJvbmljbyI6IiIsInJlaW5pY2lhQ2xhdmUiOiJOIiwidmVyaWZpY2FQZXJtaXNvcyI6IlMiLCJ2ZXJpZmljYUVxdWlwbyI6Ik4iLCJtdWx0aVNlc2lvbiI6IlMiLCJlcXVpcG9Ob21icmUiOiJSQUxDSVZBUiIsImVxdWlwb0lQIjoiIiwiZXF1aXBvRmVjaGEiOiIyMDIzLzA2LzE4IDExOjI5OjE3IiwibmJmIjoxNjg3MTA1NzU3LCJleHAiOjE2ODc3MTA1NTcsImlhdCI6MTY4NzEwNTc1N30.7hTwr4l1395R_9IDHtytvlWiFcUfdq6iAM9SrouS1Ko');
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
    const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlJBTENJVkFSIiwidXN1YXJpb0lkIjoiUkFMQ0lWQVIiLCJub21icmUiOiJST0JFUlRPIEFMQ0lWQVIgRy4iLCJlbXByZXNhSWQiOiIxIiwibG9jYWxJZCI6IjgwIiwiZW1wcmVzYU5vbWJyZSI6IlMuQS4gSU1QT1JUQURPUkEgQU5ESU5BIFMuQS5JLkEuIiwibG9jYWxOb21icmUiOiJMT0NBTCA4MCAvIE1BVFJJWiBHWUUiLCJjb3JyZW9FbGVjdHJvbmljbyI6IiIsInJlaW5pY2lhQ2xhdmUiOiJOIiwidmVyaWZpY2FQZXJtaXNvcyI6IlMiLCJ2ZXJpZmljYUVxdWlwbyI6Ik4iLCJtdWx0aVNlc2lvbiI6IlMiLCJlcXVpcG9Ob21icmUiOiJSQUxDSVZBUiIsImVxdWlwb0lQIjoiIiwiZXF1aXBvRmVjaGEiOiIyMDIzLzA2LzE4IDExOjI5OjE3IiwibmJmIjoxNjg3MTA1NzU3LCJleHAiOjE2ODc3MTA1NTcsImlhdCI6MTY4NzEwNTc1N30.7hTwr4l1395R_9IDHtytvlWiFcUfdq6iAM9SrouS1Ko');
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
