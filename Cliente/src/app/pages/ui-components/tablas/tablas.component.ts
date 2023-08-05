import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ObtenerSaldosInventarioService } from 'src/app/services/obtener-saldos-inventario.service';
import { Saldolistar } from 'src/app/interfaces/saldolistar';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent {

  @Input() localesMostrar: number[];
  @Input() lineasMostrar: number[];
  @Input() permisoCostoUnitario: boolean;
  @Input() fechaFin: Date;
  @Input() fechaInicio: Date;
  @Input() codigosVisualizar: Boolean;
  @Input() lineasVisualizar: Boolean;
  @Input() codigosEscogidos: number[];
  @Input() lineasDisponibles: String;
  locales: number[];
  lineas: number[];
  codigos: number[];
  SaldosInventario: Saldolistar[] = [];
  SaldosInventarioSeparadoLocal: { [localId: number]: Saldolistar[] } = {};
  DatosMostrar: boolean = false;

  constructor(private obtenerSaldos: ObtenerSaldosInventarioService) { }

  async ngOnChanges(changes: SimpleChanges) {
    if ((changes['localesMostrar'] || changes['lineasMostrar']) && this.lineasVisualizar) {
      this.locales = [...this.localesMostrar];
      this.lineas = [...this.lineasMostrar];
      this.SaldosInventario = await this.obtenerSaldos.getSaldosInventarioSafe(this.locales, this.lineas);
      console.log(this.locales)
      console.log(this.lineas)
      console.log(this.SaldosInventario)
      console.log(this.lineasVisualizar)
      console.log("lineasVisualizar")
      if (this.locales.length == 0 || this.lineas.length == 0 || this.SaldosInventario.length == 0) {
        this.DatosMostrar = false;
      } else {
        this.DatosMostrar = true;
        this.SaldosInventarioSeparadoLocal = this.agruparPorLocalId(this.SaldosInventario);
      }
    } else if ((changes['codigosEscogidos'] || changes['localesMostrar']) && this.codigosVisualizar == true) {
      this.codigos = [...this.codigosEscogidos];
      this.locales = [...this.localesMostrar];
      this.SaldosInventario  = await this.obtenerSaldos.getTodosSaldosInventarioSafe( this.locales, this.lineasDisponibles);
      console.log(this.locales)
      console.log(this.SaldosInventario)
      console.log(this.codigosVisualizar)
      console.log("codigosVisualizar")
      if (this.locales.length == 0 || this.SaldosInventario.length == 0) {
        console.log(" fallo 1 codigosVisualizar")
        this.DatosMostrar = false;
      } else {
        let Articulos: Saldolistar[] = []
        for (const elemento of this.SaldosInventario) {
          if (this.codigos[0] <= parseInt(elemento.itemId) && parseInt(elemento.itemId) <= this.codigos[1]) {
            Articulos.push(elemento);
          }
        }
        if (Articulos.length > 0){
        console.log("Si codigosVisualizar")
        this.DatosMostrar = true;
        this.SaldosInventarioSeparadoLocal = this.agruparPorLocalId(Articulos);
        }
      }
    }
  }

  agruparPorLocalId(data: Saldolistar[]): { [localId: number]: Saldolistar[] } {
    const resultado: { [localId: number]: Saldolistar[] } = {};
    for (const elemento of data) {
      const localId = elemento.localId;
      if (resultado[localId]) {
        resultado[localId].push(elemento);
      } else {
        resultado[localId] = [elemento];
      }
    }
    return resultado;
  }


}
