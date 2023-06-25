import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { ObtenerListasService } from 'src/app/services/obtener-listas.service';

@Component({
  selector: 'app-lista-lineas',
  templateUrl: './lista-lineas.component.html',
  styleUrls: ['./lista-lineas.component.scss']
})
export class ListaLineasComponent {

  protected locales:any =[];

  @Output() lineasSeleccionadas = new EventEmitter<any[]>();

  constructor(private servicioListas: ObtenerListasService) {
   
  }

  async ngOnInit() {
    this.locales  = await this.servicioListas.getListaLineasSafe();
    console.log(this.locales);
  }

  onLocalesSeleccionados(localesElegidos: any) {
    const opcionesSeleccionadas = localesElegidos.selectedOptions.selected.map((option:any) => option.value);
    this.lineasSeleccionadas.emit(opcionesSeleccionadas);
  }

}
