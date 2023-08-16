import { Injectable } from '@angular/core';
import { RealizarPeticionesAsincronasSafeService } from './realizar-peticiones-asincronas-safe.service';

const urlKardex: string = "http://oasysweb.saia.com.ec/andina/api/inventario/reportes/kardex"

@Injectable({
  providedIn: 'root'
})
export class ObtenerKardexService {

  constructor(private peticionesAsync: RealizarPeticionesAsincronasSafeService) { }

  async getKardexSafe(LocalesEscogidos: number[], codigoDesde: String, codigoHasta: String, fechaDesde: Date, fechaHasta: Date, nivel: String, Stock: String) {
    const bodyenvio = {
      "locales": this.StringLocales(LocalesEscogidos),
      "formatoNivel": nivel,
      "itemSinMovimientos": Stock,
      "codigoDesde": codigoDesde,
      "codigoHasta": codigoHasta,
      "fechaDesde": this.StringFecha(fechaDesde),
      "fechaHasta": this.StringFecha(fechaHasta)
    };
    return this.peticionesAsync.realizarPostAsincronoSeguro(bodyenvio,urlKardex)
  }

  private StringLocales(LocalesEscogidos: number[]) {
    return LocalesEscogidos.join(",");
  }

  private StringFecha(fecha: Date) {
    var dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let yyy = fecha.getFullYear();
    let fechaInicioEnviar = yyy + "/" + mes + "/" + dia;
    console.log(fechaInicioEnviar)
    return fechaInicioEnviar
  }


}
