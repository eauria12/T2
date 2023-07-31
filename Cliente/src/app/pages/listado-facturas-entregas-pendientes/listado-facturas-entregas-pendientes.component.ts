import { Component,ViewChild } from '@angular/core';
import { LocalIdService } from 'src/app/services/resources/local.service';
import { MatSelectionList } from '@angular/material/list';
@Component({
  selector: 'app-listado-facturas-entregas-pendientes',
  templateUrl: './listado-facturas-entregas-pendientes.component.html',
  styleUrls: ['./listado-facturas-entregas-pendientes.component.scss']
})
export class ListadoFacturasEntregasPendientesComponent {
  typesOfNivel: string[] = ['Nacional', 'Zona', 'Local'];
  @ViewChild('nivel') nivelList: MatSelectionList;
  selected: string | null = null; // Variable para almacenar el valor seleccionado
  selectedValue: String;
  fechaDesde: Date;
  fechaHasta: Date;

  onSelectionChange(event: any) {
    this.selected = event.source._value[0];
  }
  onSelectedValue(value: String) {
    this.selectedValue = value;
    //console.log(this.selectedValue);imprime al instante

  }

  buscarLocales() {
    if (this.nivelList.selectedOptions.selected.length > 0) {
      console.log(this.nivelList.selectedOptions.selected[0].value);
      console.log(this.fechaDesde);
      console.log(this.fechaHasta);
      console.log(this.selectedValue);

     
    }
  }

/*
  presentacion: string[] = ['Saldos Consolidados', 'Saldos por Local'];
  lineArticulo: string[] = ['Por Código', 'Por línea'];
  zona: string[] = ['Nacional', 'Zona Centro-Norte', 'Zona Sur'];
  acceso: boolean = false

  localId:string | null;
  constructor(private LocalIdService: LocalIdService) { }

  mostrarLocalId(): void {
    this.localId=this.LocalIdService.getLocalId();
    console.log("imprimmiendo en otra pagina");

    console.log(this.localId);
  }
*/
  
}
