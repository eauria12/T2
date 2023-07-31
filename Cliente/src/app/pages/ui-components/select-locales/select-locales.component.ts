import { Component, EventEmitter, Output } from '@angular/core';
import {ObtenerListasService} from 'src/app/services/obtener-listas.service';
import { Local } from 'src/app/interfaces/local';
@Component({
  selector: 'app-select-locales',
  templateUrl: './select-locales.component.html',
  styleUrls: ['./select-locales.component.scss']
})
export class SelectLocalesComponent {

  constructor(private servicioListas: ObtenerListasService) {}
  localId: Local[] = [];
  selectLocal: String;
  
  @Output() selectedValue = new EventEmitter<any>();
    async ngOnInit() {
      this.localId = await this.servicioListas.getListaLocalesSafe();
    }

  

    onSelectChange() {
      this.selectedValue.emit(this.selectLocal);
    }
  
}
