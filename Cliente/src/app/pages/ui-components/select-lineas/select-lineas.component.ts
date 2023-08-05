import { Component, EventEmitter, Output } from '@angular/core';
import {ObtenerListasService} from 'src/app/services/obtener-listas.service';
import { Local } from 'src/app/interfaces/local';

@Component({
  selector: 'app-select-lineas',
  templateUrl: './select-lineas.component.html',
  styleUrls: ['./select-lineas.component.scss']
})
export class SelectLineasComponent {

  constructor(private servicioListas: ObtenerListasService) {}
  lineasId: Local[] = [];
  selectLocal: String;
  
  @Output() selectedValue = new EventEmitter<any>();
    async ngOnInit() {
      this.lineasId = await this.servicioListas.getListaLineasSafe();
    }

  

    onSelectChange() {
      this.selectedValue.emit(this.selectLocal);
    }
  
}
