import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ObtenerSaldosInventarioService } from 'src/app/services/obtener-saldos-inventario.service';
import { Saldolistar } from 'src/app/interfaces/saldolistar';
import { SaldoLocal } from 'src/app/interfaces/saldo-local';

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
  @Input() formatoPresentacion: String;
  @Input() lineasVisualizar: Boolean;
  @Input() codigosEscogidos: number[];
  locales: number[];
  lineas: number[];
  codigos: number[];
  SaldosInventario: Saldolistar[] = [];
  SaldosInventarioSeparadoLocal: SaldoLocal[] = [];
  formato: String;
  DatosMostrar: boolean = false;

  constructor(private obtenerSaldos: ObtenerSaldosInventarioService) { }

  async ngOnChanges(changes: SimpleChanges) {
    this.SaldosInventario = []
    if ((changes['localesMostrar'] || changes['lineasMostrar'] || changes['formatoPresentacion']) && this.lineasVisualizar) {
      this.locales = [...this.localesMostrar];
      this.lineas = [...this.lineasMostrar];
      this.formato = this.formatoPresentacion;
      console.log(this.locales);
      console.log(this.lineas);
      console.log(this.formato);
      this.SaldosInventario = await this.obtenerSaldos.getSaldosInventarioSafe(this.locales, this.lineas, this.formato);
      console.log(this.SaldosInventario );
      if (this.locales.length == 0 || this.lineas.length == 0 || this.SaldosInventario == null) {
        this.DatosMostrar = false;
      } else {
        console.log("Visualizar por lienas")
        this.DatosMostrar = true;
        if (this.formato == "L") {
          this.SaldosInventarioSeparadoLocal = this.agruparSaldosPorLocal(this.SaldosInventario);
          console.log(this.SaldosInventarioSeparadoLocal)
        } else if (this.formato == "C") {
          this.SaldosInventarioSeparadoLocal = this.agruparSaldosPorLocal(this.SaldosInventario);
          console.log(this.SaldosInventarioSeparadoLocal)
        }
      }
    } else if ((changes['codigosEscogidos'] || changes['localesMostrar'] || changes['formatoPresentacion']) && this.codigosVisualizar == true) {
      this.codigos = [...this.codigosEscogidos];
      this.locales = [...this.localesMostrar];
      this.formato = this.formatoPresentacion;
      this.SaldosInventario = await this.obtenerSaldos.getSaldosInventarioCodigoSafe(this.codigos, this.formato,this.locales)
      if (this.locales.length == 0 || this.SaldosInventario == null) {
        this.DatosMostrar = false;
      } else {
        this.DatosMostrar = true;
        if (this.formato == "L") {
          this.SaldosInventarioSeparadoLocal = this.agruparSaldosPorLocal(this.SaldosInventario);
          console.log(this.SaldosInventarioSeparadoLocal)
        } else if (this.formato == "C") {
          this.SaldosInventarioSeparadoLocal = this.agruparSaldosPorLocal(this.SaldosInventario);
          console.log(this.SaldosInventarioSeparadoLocal)
        }
      }
    }
  }

  agruparSaldosPorLocal(saldosArray: Saldolistar[]): SaldoLocal[] {
    const saldosPorLocal: { [localId: number]: SaldoLocal } = {};
  
    for (const saldo of saldosArray) {
      if (!saldosPorLocal[saldo.localId]) {
        saldosPorLocal[saldo.localId] = {
          localNombre: saldo.localNombre,
          listaSaldos: []
        };
      }
  
      const local = saldosPorLocal[saldo.localId];
      local.listaSaldos.push(saldo);
    }
  
    return Object.values(saldosPorLocal);
  }


}
