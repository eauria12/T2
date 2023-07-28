import { Component, OnInit, Output, EventEmitter, Input, ViewChild, SimpleChanges } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { ObtenerListasService } from 'src/app/services/obtener-listas.service';
import { Local } from 'src/app/interfaces/local';

@Component({
  selector: 'app-lista-locales',
  templateUrl: './lista-locales.component.html',
  styleUrls: ['./lista-locales.component.scss']
})
export class ListaLocalesComponent implements OnInit {

  protected locales: Local[] = [];

  @Output() localesSeleccionados = new EventEmitter<any[]>();
  @Input() localesDisponibles: number[];
  @Input() NivelLocal: String;
  @ViewChild('localesElegidos') localesElegidosList: MatSelectionList;

  constructor(private servicioListas: ObtenerListasService) {

  }

  async ngOnInit() {
    this.locales = await this.servicioListas.getListaLocalesSafe();
    if (this.localesDisponibles.length > 0) {
      this.locales = this.locales.filter(elemento => this.localesDisponibles.includes(elemento.id));
    }
    console.log(this.locales);
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['NivelLocal']) {
      if (this.NivelLocal == "Nacional"){
        this.seleccionarNivelNacional();
      }
    }
  }

  onLocalesSeleccionados(localesElegidos: any) {
    const opcionesSeleccionadas = localesElegidos.selectedOptions.selected.map((option: any) => option.value);
    this.localesSeleccionados.emit(opcionesSeleccionadas);
  }

  seleccionarNivelNacional() {
    if (this.localesElegidosList) {
      const todasLasOpciones = this.localesElegidosList.options.toArray();
      todasLasOpciones.forEach(opcion => opcion._setSelected(true));
    }
    const opcionesSeleccionadas = this.localesElegidosList.selectedOptions.selected.map((option: any) => option.value);
    this.localesSeleccionados.emit(opcionesSeleccionadas);
  }


}
