import { Injectable } from '@angular/core';
import { RealizarPeticionesAsincronasSafeService } from './realizar-peticiones-asincronas-safe.service';
import { Permiso } from 'src/app/interfaces/permiso';

const urlObtenerPermisos: string = "http://oasysweb.saia.com.ec/andina/api/seguridad/nivel/";

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
      if (ultimosDosDigitos === "50") {
        booleanos[0] = true;
      }
      if (ultimosDosDigitos === "51") {
        booleanos[1] = true;
      }
      if (ultimosDosDigitos === "52") {
        booleanos[2] = true;
      }
      if (ultimosDosDigitos === "54") {
        booleanos[3] = true;
      }
    });
    return booleanos;
  }

  async permisoCostoUnitario(servicio: String) {
    let permiso = false;
    this.listaPermisos = await this.getPermisosSafe(servicio);
    this.listaPermisos.forEach((elemento) => {
      const nivelId = elemento.nivelId.toString();
      const ultimosDosDigitos = nivelId.slice(-2);
      if (ultimosDosDigitos === "60") {
        permiso = true;
      }
    });
   return permiso; 
}

  private obtenerCodigoPermiso(nivelId: string): string {
    const ultimosNumeros = nivelId.slice(-2);
    return ultimosNumeros.toString();
  }

}
