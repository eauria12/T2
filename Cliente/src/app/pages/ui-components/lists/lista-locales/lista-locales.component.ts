import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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

  constructor(private servicioListas: ObtenerListasService) {

  }

  async ngOnInit() {
    this.locales = await this.servicioListas.getListaLocalesSafe();
    if (this.localesDisponibles.length > 0) {
      this.locales = this.locales.filter(elemento => this.localesDisponibles.includes(elemento.id));
    }
    console.log(this.locales);
  }

  onLocalesSeleccionados(localesElegidos: any) {
    const opcionesSeleccionadas = localesElegidos.selectedOptions.selected.map((option: any) => option.value);
    this.localesSeleccionados.emit(opcionesSeleccionadas);
  }


}
