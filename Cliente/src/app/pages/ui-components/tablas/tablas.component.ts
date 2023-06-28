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
  locales: number[];
  @Input() lineasMostrar: number[];
  lineas: number[];
  SaldosInventario : Saldolistar[] = [];
  SaldosInventarioSeparadoLocal: { [localId: number]: Saldolistar[] } = {};

  constructor(private obtenerSaldos: ObtenerSaldosInventarioService) {}

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['localesMostrar'] || changes['lineasMostrar'] ) {
      this.locales = [...this.localesMostrar];
      this.lineas = [...this.lineasMostrar];
      this.SaldosInventario = await this.obtenerSaldos.getSaldosInventarioSafe(this.locales,this.lineas);
      this.SaldosInventarioSeparadoLocal = this.agruparPorLocalId(this.SaldosInventario);
  
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
