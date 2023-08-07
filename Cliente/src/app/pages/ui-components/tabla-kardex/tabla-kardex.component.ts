import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { Existencia } from 'src/app/interfaces/existencia';
import { Saldolistar } from 'src/app/interfaces/saldolistar';
import { ObtenerKardexService } from 'src/app/services/obtener-kardex.service';
import { Kardex } from 'src/app/interfaces/kardex';

@Component({
  selector: 'app-tabla-kardex',
  templateUrl: './tabla-kardex.component.html',
  styleUrls: ['./tabla-kardex.component.scss']
})
export class TablaKardexComponent {
  listaPreciosExistenciaFiltrados: Existencia[] = [];

  @Input() localesMostrar: number[];
  @Input() fechaInicio: Date;
  @Input() fechaFin: Date;
  @Input() codigosEscogidos: number[];
  @Input() seleccionNivel: string;
  @Input() stock: string;
  @Input() localSeleccion: boolean;
  localSeleccionHabilita: boolean;
  listaKardex: Kardex[] = [];
  kardexSeparadoLocal: { [localId: string]: Kardex[] } = {};
  KardexFinal: Kardex[] = [];

  constructor(private obtenerKardex: ObtenerKardexService) { }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['localesMostrar'] || changes['fechaInicio'] || changes['fechaFin'] || changes['codigosEscogidos'] || changes['seleccionNivel'] || changes['stock'] || changes['localSeleccion']) {
      let locales: number[] = this.localesMostrar;
      console.log('locales:', locales);

      let fechaDesdeEnvio: Date = this.fechaInicio;
      console.log('fechaDesdeEnvio:', fechaDesdeEnvio);

      let fechaHastaEnvio: Date = this.fechaFin;
      console.log('fechaHastaEnvio:', fechaHastaEnvio);

      let codigosDesdeEnvio: string = String(this.codigosEscogidos[0]);
      console.log('codigosDesdeEnvio:', codigosDesdeEnvio);

      let codigosHastaEnvio: string = String(this.codigosEscogidos[1]);
      console.log('codigosHastaEnvio:', codigosHastaEnvio);

      let nivelEnvio: string = this.seleccionNivel;
      console.log('nivelEnvio:', nivelEnvio);

      let stockEnvio: string = this.stock;
      console.log('stockEnvio:', stockEnvio);
      this.localSeleccionHabilita = this.localSeleccion;
      console.log('localSeleccion:', this.localSeleccion);
      this.listaKardex = await this.obtenerKardex.getKardexSafe(locales, codigosDesdeEnvio, codigosHastaEnvio, fechaDesdeEnvio, fechaHastaEnvio, nivelEnvio, stockEnvio);
      console.log(this.listaKardex)
      if (this.listaKardex.length > 0) {
        if (this.localSeleccion) {
          console.log("por local")
          this.kardexSeparadoLocal = this.agruparPorLocalId(this.listaKardex);
          console.log(this.kardexSeparadoLocal)
        } else {
          console.log("Solito")
          this.KardexFinal = this.listaKardex;
          console.log(this.KardexFinal)
        }
      }
    }
  }

  agruparPorLocalId(data: Kardex[]): { [localId: string]: Kardex[] } {
    const resultado: { [localId: string]: Kardex[] } = {};
    for (const elemento of data) {
      const localId = elemento.localNombre;
      if (resultado[localId]) {
        resultado[localId].push(elemento);
      } else {
        resultado[localId] = [elemento];
      }
    }
    return resultado;
  }


}
