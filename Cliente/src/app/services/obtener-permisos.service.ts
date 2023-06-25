import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service'

@Injectable({
  providedIn: 'root'
})
export class ObtenerPermisosService {

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

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

}
