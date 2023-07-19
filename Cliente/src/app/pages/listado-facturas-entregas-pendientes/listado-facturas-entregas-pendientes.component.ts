import { Component,NgModule } from '@angular/core';


@Component({
  selector: 'app-listado-facturas-entregas-pendientes',
  templateUrl: './listado-facturas-entregas-pendientes.component.html',
  styleUrls: ['./listado-facturas-entregas-pendientes.component.scss']
})
export class ListadoFacturasEntregasPendientesComponent {

  typesOfNivel: string[] = ['Nacional', 'Zona', 'Local'];
  presentacion: string[] = ['Saldos Consolidados', 'Saldos por Local'];
  lineArticulo: string[] = ['Por Código', 'Por línea'];
  zona: string[] = ['Nacional', 'Zona Centro-Norte', 'Zona Sur'];
  acceso: boolean = false
}
