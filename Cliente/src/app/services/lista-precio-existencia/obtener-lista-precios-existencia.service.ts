import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ObtenerListaPreciosExistenciaService {

  constructor(private http: HttpClient, private auth: AuthService) {   }

  async getListPrecioExistencia() {
    return new Promise<any>((resolve, reject) => {
      this.http.post("http://oasysweb.saia.com.ec/andina/api/inventario/reportes/preciosListar",{})
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
