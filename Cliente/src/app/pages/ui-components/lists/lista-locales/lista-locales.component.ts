import { Component, OnInit, Output, EventEmitter, Input, ViewChild, SimpleChanges } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { ObtenerListasService } from 'src/app/services/obtener-listas.service';
import { Local } from 'src/app/interfaces/local';
import { LocalIdService } from 'src/app/services/resources/local.service';
import { ObtenerLocalInfoService } from 'src/app/services/obtener-local-info.service';

@Component({
  selector: 'app-lista-locales',
  templateUrl: './lista-locales.component.html',
  styleUrls: ['./lista-locales.component.scss']
})
export class ListaLocalesComponent implements OnInit {

  protected locales: Local[] = [];
  localId:string | null;
  zonaId: number;

  @Output() localesSeleccionados = new EventEmitter<any[]>();
  @Input() localesDisponibles: number[];
  @Input() NivelLocal: String;
  @ViewChild('localesElegidos') localesElegidosList: MatSelectionList;


  constructor(private servicioListas: ObtenerListasService,private LocalIdService: LocalIdService, private localInfo: ObtenerLocalInfoService) {

  }

  async ngOnInit() {
    this.localId = this.LocalIdService.getLocalId();
    this.zonaId = await this.localInfo.getLocalZona(this.localId);
    this.locales = await this.servicioListas.getListaLocalesSafe();
    console.log("-------------------------------------------");
    console.log(this.locales);
    console.log(this.localesDisponibles);
    console.log(this.localesDisponibles.length);
    console.log("-------------------------------------------");
    if (this.localesDisponibles.length > 0) {
      this.locales = this.locales.filter(elemento => this.localesDisponibles.includes(elemento.id));
    }

  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['NivelLocal']) {
      if (this.NivelLocal == "Nacional"){
        this.seleccionarNivelNacional();
      } else if ( (this.NivelLocal).slice(0, 4) == "Zona"){
        this.seleccionarNivelZona();
      } else if (this.NivelLocal == "Local"){
        this.seleccionarNivelLocal();
      }
    }
  }

  onLocalesSeleccionados(localesElegidos: any) {
    const opcionesSeleccionadas = localesElegidos.selectedOptions.selected.map((option: any) => option.value.id);
    this.localesSeleccionados.emit(opcionesSeleccionadas);
  }

  seleccionarNivelNacional() {
    if (this.localesElegidosList) {
      const todasLasOpciones = this.localesElegidosList.options.toArray();
      todasLasOpciones.forEach(opcion => opcion._setSelected(true));
    }
    const opcionesSeleccionadas = this.localesElegidosList.selectedOptions.selected.map((option: any) => option.value.id);
    this.localesSeleccionados.emit(opcionesSeleccionadas);
  }

  seleccionarNivelZona() {
    if (this.localesElegidosList) {
      const todasLasOpciones = this.localesElegidosList.options.toArray();
      console.log(todasLasOpciones);
      todasLasOpciones.forEach(opcion => {
        const zonaIdOpcion = opcion.value.zonaId;
        console.log(zonaIdOpcion);
        console.log((this.NivelLocal).slice(-1));
        if (zonaIdOpcion == (this.NivelLocal).slice(-1)) {  //if (zonaIdOpcion === this.zonaIdSeleccionada)
          opcion._setSelected(true); // Seleccionar la opción si el zonaId coincide
        } else {
          opcion._setSelected(false); // Des-seleccionar la opción si el zonaId no coincide
        }
      });
    const opcionesSeleccionadas = this.localesElegidosList.selectedOptions.selected.map((option: any) => option.value.id);
    this.localesSeleccionados.emit(opcionesSeleccionadas);
    }
  }

  seleccionarNivelLocal() {
    if (this.localesElegidosList) {
      const todasLasOpciones = this.localesElegidosList.options.toArray();
      todasLasOpciones.forEach(opcion => {
        const localActual = opcion.value.id; 
        if (localActual == this.localId) {  //if (zonaIdOpcion === this.zonaIdSeleccionada)
          opcion._setSelected(true); // Seleccionar la opción si el zonaId coincide
        } else {
          opcion._setSelected(false); // Des-seleccionar la opción si el zonaId no coincide
        }
      });
    const opcionesSeleccionadas = this.localesElegidosList.selectedOptions.selected.map((option: any) => option.value.id);
    this.localesSeleccionados.emit(opcionesSeleccionadas);
    }
  }

}
