import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtenerLocalInfoService {

  constructor(private http: HttpClient) { }

  async getLocalZona(local: number) {
    let LocalInfotemp = await this.getLocalInfoSafe(local);
    return LocalInfotemp.zonaId;
  }

  async getLocalInfoSafe(local: number) {
    return new Promise<any>((resolve, reject) => {
      this.http.get("http://oasysweb.saia.com.ec/andina/api/info/local/" + local)
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
