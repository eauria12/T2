import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs';
import { RealizarPeticionesAsincronasSafeService } from './realizar-peticiones-asincronas-safe.service';

const urlListaZonas: string = "http://oasysweb.saia.com.ec/andina/api/info/zona/lista";
const urlListaLocales: string = "http://oasysweb.saia.com.ec/andina/api/info/local/lista";
const urlListaLineas: string = "http://oasysweb.saia.com.ec/andina/api/info/linea/lista";
const urlListaPorRango: string = "http://oasysweb.saia.com.ec/andina/api/info/linea/listaPorRango/";

@Injectable({
  providedIn: 'root'
})
export class ObtenerListasService {

  constructor(private http: HttpClient, private peticionesAsync: RealizarPeticionesAsincronasSafeService) {   }

  async getListaZonasSafe() {
    return this.peticionesAsync.realizarGetAsincronoSeguro(urlListaZonas);
  }

  async getListaLocalesSafe() {
    return this.peticionesAsync.realizarGetAsincronoSeguro(urlListaLocales);
  }

  async getListaLineasSafe() {
    return this.peticionesAsync.realizarGetAsincronoSeguro(urlListaLineas);
  }

  async getListaPorRangoLineasSafe(lineas: String) {
    let urlEnvio = urlListaPorRango + lineas;
    return this.peticionesAsync.realizarGetAsincronoSeguro(urlEnvio);
  }

}
