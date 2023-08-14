import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { Existencia } from 'src/app/interfaces/existencia';
import { ObtenerKardexService } from 'src/app/services/obtener-kardex.service';
import { Kardex } from 'src/app/interfaces/kardex';
import { KardexCodigo } from 'src/app/interfaces/kardex-codigo';
import { KardexLocal } from 'src/app/interfaces/kardex-local';

@Component({
  selector: 'app-tabla-kardex',
  templateUrl: './tabla-kardex.component.html',
  styleUrls: ['./tabla-kardex.component.scss']
})
export class TablaKardexComponent {

  @Input() localesMostrar: number[];
  @Input() fechaInicio: Date;
  @Input() fechaFin: Date;
  @Input() codigosEscogidos: number[];
  @Input() seleccionNivel: string;
  @Input() stock: string;
  @Input() localSeleccion: boolean;
  localSeleccionHabilita: boolean;
  listaKardex: Kardex[] = [];
  kardexSeparadoLocal: KardexLocal[] = [];
  KardexFinal: KardexCodigo[] = [];

  constructor(private obtenerKardex: ObtenerKardexService) { }

  async ngOnChanges(changes: SimpleChanges) {
    this.listaKardex = []
    if (changes['localesMostrar'] || changes['fechaInicio'] || changes['fechaFin'] || changes['codigosEscogidos'] || changes['seleccionNivel'] || changes['stock'] || changes['localSeleccion']) {
      let locales: number[] = this.localesMostrar;
      let fechaDesdeEnvio: Date = this.fechaInicio;
      let fechaHastaEnvio: Date = this.fechaFin;
      let codigosDesdeEnvio: string = String(this.codigosEscogidos[0]);
      let codigosHastaEnvio: string = String(this.codigosEscogidos[1]);
      let nivelEnvio: string = this.seleccionNivel;
      let stockEnvio: string = this.stock;
      this.localSeleccionHabilita = this.localSeleccion;
      if (this.validarExistencia(locales, codigosDesdeEnvio, codigosHastaEnvio, fechaDesdeEnvio, fechaHastaEnvio, nivelEnvio, stockEnvio)) {
        this.listaKardex = await this.obtenerKardex.getKardexSafe(locales, codigosDesdeEnvio, codigosHastaEnvio, fechaDesdeEnvio, fechaHastaEnvio, nivelEnvio, stockEnvio);
        console.log(this.listaKardex)
        if (this.listaKardex.length > 0) {
          if (this.localSeleccion) {
            console.log("por local")
            this.kardexSeparadoLocal = this.agruparKardexPorLocal(this.listaKardex);
            console.log(this.kardexSeparadoLocal)
          } else {
            console.log("Solito");
            this.KardexFinal = this.agruparKardexPorCodigo(this.listaKardex);
            console.log(this.KardexFinal)
          }
        }
      }
    }
  }

  agruparKardexPorCodigo(kardexArray: Kardex[]): KardexCodigo[] {
    const kardexPorCodigo: { [codigoId: string]: KardexCodigo } = {};

    for (const kardex of kardexArray) {
      if (!kardexPorCodigo[kardex.itemId]) {
        const nuevoKardexCodigo: KardexCodigo = {
          codigoId: kardex.itemId,
          nombre: kardex.itemNombre,
          ultimaCompra: kardex.fechaUltimaCompra,
          ultimaVenta: kardex.fechaUltimaVenta,
          stockMin: kardex.stockMinimo.toString(),
          stockMax: kardex.stockMaximo.toString(),
          precio: kardex.precio.toString(),
          moneda: kardex.monedaId,
          unidad: kardex.unidadMedidaId,
          localNombre: kardex.localNombre,
          registroKardex: []
        };
        kardexPorCodigo[kardex.itemId] = nuevoKardexCodigo;
      }

      kardexPorCodigo[kardex.itemId].registroKardex.push(kardex);
    }

    return Object.values(kardexPorCodigo);
  }

  agruparKardexPorLocal(kardexArray: Kardex[]): KardexLocal[] {
    const kardexPorLocal: { [localId: number]: KardexLocal } = {};

    for (const kardex of kardexArray) {
      if (!kardexPorLocal[kardex.localId]) {
        kardexPorLocal[kardex.localId] = {
          localNombre: kardex.localNombre,
          listaKardexporCodigo: []
        };
      }

      const local = kardexPorLocal[kardex.localId];
      let kardexCodigo = local.listaKardexporCodigo.find(k => k.codigoId === kardex.itemId);

      if (!kardexCodigo) {
        kardexCodigo = {
          codigoId: kardex.itemId,
          nombre: kardex.itemNombre,
          ultimaCompra: kardex.fechaUltimaCompra,
          ultimaVenta: kardex.fechaUltimaVenta,
          stockMin: kardex.stockMinimo.toString(),
          stockMax: kardex.stockMaximo.toString(),
          precio: kardex.precio.toString(),
          moneda: kardex.monedaId,
          unidad: kardex.unidadMedidaId,
          localNombre: kardex.localNombre,
          registroKardex: []
        };
        local.listaKardexporCodigo.push(kardexCodigo);
      }

      kardexCodigo.registroKardex.push(kardex);
    }

    return Object.values(kardexPorLocal);
  }


  validarExistencia(LocalesEscogidos: number[],
    codigoDesde: string,
    codigoHasta: string,
    fechaDesde: Date,
    fechaHasta: Date,
    nivel: string,
    stock: string
  ): boolean {
    if (!LocalesEscogidos.length) {
      this.MostrarAlerta("No hay Locales");
      return false;
    }
    if (!codigoDesde || !codigoHasta) {
      this.MostrarAlerta("Códigos inválidos");
      return false;
    }
    if (!fechaDesde || !fechaHasta) {
      this.MostrarAlerta("Fechas inválidas");
      return false;
    }
    if (!nivel) {
      this.MostrarAlerta("No hay nivel seleccionado");
      return false;
    }
    if (!stock) {
      this.MostrarAlerta("No hay stock seleccionado");
      return false;
    }
    return true;
  }


  MostrarAlerta(Mensaje: String) {
    Swal.fire({
      title: Mensaje,
      icon: 'info',
      timer: 3000,
      showConfirmButton: false,

    });
  }
}
