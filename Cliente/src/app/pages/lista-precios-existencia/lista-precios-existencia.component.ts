import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-precios-existencia',
  templateUrl: './lista-precios-existencia.component.html',
  styleUrls: ['./lista-precios-existencia.component.scss']
  
})
export class ListaPreciosExistenciaComponent {
  constructor() { }
  tipoInventario: string[] = ['Físico', 'Disponible'];
  tipoNivel: string[] = ['Nacional', 'Local', 'Zonal']
  
}
