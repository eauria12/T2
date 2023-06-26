import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { ObtenerListasService } from 'src/app/services/obtener-listas.service';
import { Linea } from 'src/app/interfaces/linea'

@Component({
  selector: 'app-lista-lineas',
  templateUrl: './lista-lineas.component.html',
  styleUrls: ['./lista-lineas.component.scss']
})
export class ListaLineasComponent {

  protected lineas: Linea[] =[];

  @Output() lineasSeleccionadas = new EventEmitter<any[]>();

  constructor(private servicioListas: ObtenerListasService) {
   
  }

  async ngOnInit() {
    let lineasDisponibles = await this.servicioListas;// aqui iria el que trae todas las listas si es que elo que retorna tiene longitud 0 se usa la funcion de abajo 
    this.lineas  = await this.servicioListas.getListaLineasSafe();
    console.log(this.lineas);
  }

  onLineasSeleccionadas(lineasSeleccionadas: any) {
    const opcionesSeleccionadas = lineasSeleccionadas.selectedOptions.selected.map((option:any) => option.value);
    this.lineasSeleccionadas.emit(opcionesSeleccionadas);
  }

}
