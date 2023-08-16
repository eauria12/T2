import { Injectable } from '@angular/core';
import { RealizarPeticionesAsincronasSafeService } from './realizar-peticiones-asincronas-safe.service';

const urlInfoLocal: string = "http://oasysweb.saia.com.ec/andina/api/info/local/";

@Injectable({
  providedIn: 'root'
})


export class ObtenerLocalInfoService {

  constructor(private peticionesAsync: RealizarPeticionesAsincronasSafeService) { }

  async getLocalZona(local: string | null) {
    let LocalInfotemp = await this.getLocalInfoSafe(local);
    console.log(LocalInfotemp);
    console.log(LocalInfotemp.zonaId);
    return LocalInfotemp.zonaId;
  }

  async getLocalInfoSafe(local: string | null) {
    let urlEnvio = urlInfoLocal + local
    return this.peticionesAsync.realizarGetAsincronoSeguro(urlEnvio)
  }

}
