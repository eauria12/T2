import { Component } from '@angular/core';
import { ObtenerListasService } from 'src/app/services/obtener-listas.service';

@Component({
  selector: 'app-lista-locales',
  templateUrl: './lista-locales.component.html',
  styleUrls: ['./lista-locales.component.scss']
})
export class ListaLocalesComponent {

  protected locales:any =[];

  constructor(private servicioListas: ObtenerListasService) {
  }

  ngOnInit() {
    let locales  =  this.servicioListas.getListaLocalesSafe();
  }


}
