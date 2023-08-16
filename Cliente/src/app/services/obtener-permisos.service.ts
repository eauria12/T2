import { Injectable } from '@angular/core';
import { RealizarPeticionesAsincronasSafeService } from './realizar-peticiones-asincronas-safe.service';
import { Permiso } from 'src/app/interfaces/permiso';

const urlObtenerPermisos: string = "http://oasysweb.saia.com.ec/andina/api/seguridad/nivel/";
const codigoPermisoNacional: string = "50";
const codigoPermisoLocal: string = "51";
const codigoPermisoZonaLocal: string = "52";
const codigoPermisoTodasZonas: string = "54";
const codigoPermisoCostoUnitario: string = "60";

@Injectable({
  providedIn: 'root'
})
export class ObtenerPermisosService {
  
  private listaPermisos: Permiso[] = [];
  private listaLocales: number[] = [];
  
  constructor(private peticionesAsync: RealizarPeticionesAsincronasSafeService) { }
  
  async getPermisosSafe(servicio: String) {
    let urlEnvio = urlObtenerPermisos + servicio
    return this.peticionesAsync.realizarGetAsincronoSeguro(urlEnvio)
  }

  async permisosDisponibles(servicio: String) {
    this.listaPermisos = await this.getPermisosSafe(servicio);
    let codigoPermiso = this.listaPermisos.map(permiso => this.obtenerCodigoPermiso(permiso.nivelId));
    return codigoPermiso;
  }

  async localesDisponibles(servicio: String) {
    this.listaPermisos = await this.getPermisosSafe(servicio);
    let listaLocalestemp = this.listaPermisos[0].locales;
    this.listaLocales = listaLocalestemp.split(",").map(numero => Number(numero));
    return this.listaLocales
  }

  async lineasDisponibles(servicio: String) {
    this.listaPermisos = await this.getPermisosSafe(servicio);
    let listaLineastemp = this.listaPermisos[0].lineas;
    return listaLineastemp;
  }

  async permisosNivel(servicio: String) {
    this.listaPermisos = await this.getPermisosSafe(servicio);
    const booleanos: boolean[] = [false, false, false, false,];
    this.listaPermisos.forEach((elemento) => {
      const nivelId = elemento.nivelId.toString();
      const ultimosDosDigitos = nivelId.slice(-2);
      if (ultimosDosDigitos === codigoPermisoNacional) { booleanos[0] = true;}
      if (ultimosDosDigitos === codigoPermisoLocal) { booleanos[1] = true;}
      if (ultimosDosDigitos === codigoPermisoZonaLocal) { booleanos[2] = true;}
      if (ultimosDosDigitos === codigoPermisoTodasZonas) { booleanos[3] = true;}
    });
    return booleanos;
  }

  async permisoCostoUnitario(servicio: String) {
    let permiso = false;
    this.listaPermisos = await this.getPermisosSafe(servicio);
    this.listaPermisos.forEach((elemento) => {
      const nivelId = elemento.nivelId.toString();
      const ultimosDosDigitos = nivelId.slice(-2);
      if (ultimosDosDigitos === codigoPermisoCostoUnitario) {permiso = true;}
    });
   return permiso; 
}

  private obtenerCodigoPermiso(nivelId: string): string {
    const ultimosNumeros = nivelId.slice(-2);
    return ultimosNumeros.toString();
  }

}
