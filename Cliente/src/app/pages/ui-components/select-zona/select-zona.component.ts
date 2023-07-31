import { Component, EventEmitter, Output } from '@angular/core';
import {ObtenerListasService} from 'src/app/services/obtener-listas.service';
import { Zona } from 'src/app/interfaces/zona';
@Component({
  selector: 'app-select-zona',
  templateUrl: './select-zona.component.html',
  styleUrls: ['./select-zona.component.scss']
})
export class SelectZonaComponent {

constructor(private servicioListas: ObtenerListasService) {}

zonaId: Zona[] = [];

selectZona: String;

@Output() selectedValue = new EventEmitter<any>();

  async ngOnInit() {
    this.zonaId = await this.servicioListas.getListaZonasSafe();
  }

  onSelectChange() {
    this.selectedValue.emit(this.selectZona);
  }
}
