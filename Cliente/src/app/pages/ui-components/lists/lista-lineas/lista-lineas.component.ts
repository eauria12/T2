import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { ObtenerListasService } from 'src/app/services/obtener-listas.service';
import { ObtenerPermisosService } from 'src/app/services/obtener-permisos.service';
import { Linea } from 'src/app/interfaces/linea'

@Component({
  selector: 'app-lista-lineas',
  templateUrl: './lista-lineas.component.html',
  styleUrls: ['./lista-lineas.component.scss']
})
export class ListaLineasComponent {

  protected lineas: Linea[] =[];
  

  @Output() lineasSeleccionadas = new EventEmitter<any[]>();
  @Input() lineasDisponibles: String;

  constructor(private servicioListas: ObtenerListasService,private servicioPermisos: ObtenerPermisosService) {
   
  }

  async ngOnInit() {
    if (this.lineasDisponibles.length > 1){
      this.lineas  = await this.servicioListas.getListaPorRangoLineasSafe(this.lineasDisponibles);
    } else {
    this.lineas  = await this.servicioListas.getListaLineasSafe();
    }
    console.log(this.lineas);
  }

  onLineasSeleccionadas(lineasSeleccionadas: any) {
    const opcionesSeleccionadas = lineasSeleccionadas.selectedOptions.selected.map((option:any) => option.value);
    this.lineasSeleccionadas.emit(opcionesSeleccionadas);
  }


}
