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
  selected: string | null = null; 
  selectedValue: String;
  fechaDesde: Date;
  fechaHasta: Date;

  onSelectionChange(event: any) {
    this.selected = event.source._value[0];
  }
  onSelectedValue(value: String) {
    this.selectedValue = value;
    

  }

  buscarLocales() {
    if (this.nivelList.selectedOptions.selected.length > 0) {
      console.log(this.nivelList.selectedOptions.selected[0].value);
      console.log(this.fechaDesde);
      console.log(this.fechaHasta);
      console.log(this.selectedValue);

     
    }
  }

  
}
