import { Component, OnInit, Output, EventEmitter,Input, ViewChild, SimpleChanges } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
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
  @Input() disabled: boolean;
  @ViewChild('lineasElegidas') lineasElegidasList: MatSelectionList;

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

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['disabled'] && this.disabled == true && this.lineasDisponibles.length != 0) {
      this.desseleccionar();
    }
  }

  onLineasSeleccionadas(lineasSeleccionadas: any) {
    const opcionesSeleccionadas = lineasSeleccionadas.selectedOptions.selected.map((option:any) => option.value);
    this.lineasSeleccionadas.emit(opcionesSeleccionadas);
  }

  desseleccionar() {
    if (this.lineasElegidasList) {
      const todasLasOpciones = this.lineasElegidasList.options.toArray();
      todasLasOpciones.forEach(opcion => opcion._setSelected(false));
    }
    const opcionesSeleccionadas = this.lineasElegidasList.selectedOptions.selected.map((option: any) => option.value.id);
    this.lineasSeleccionadas.emit(opcionesSeleccionadas);
  }


}
