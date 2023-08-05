import { Component, Output, EventEmitter, Input, ViewChild, SimpleChanges, ElementRef } from '@angular/core';
import { ObtenerListasService } from 'src/app/services/obtener-listas.service';
import { ObtenerPermisosService } from 'src/app/services/obtener-permisos.service';
import { Linea } from 'src/app/interfaces/linea'


@Component({
  selector: 'app-codigo-articulo',
  templateUrl: './codigo-articulo.component.html',
  styleUrls: ['./codigo-articulo.component.scss']
})
export class CodigoArticuloComponent {
  protected lineas: Linea[] = [];
  codigoDesde: string = '';
  codigoHasta: string = '';

  @Output() codigosEscogidos = new EventEmitter<number[]>();
  @Input() lineasDisponibles: String;
  @Input() disabled: boolean;
  @ViewChild('codigoDesdeInput', { static: false }) codigoDesdeInput!: ElementRef;
  @ViewChild('codigoHastaInput', { static: false }) codigoHastaInput!: ElementRef;

  constructor(private servicioListas: ObtenerListasService, private servicioPermisos: ObtenerPermisosService) {
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['disabled'] && this.disabled == true) {
      this.codigoDesde = '';
      this.codigoHasta = '';
    }
  }

  async ngOnInit() {
    if (this.lineasDisponibles.length > 1) {
      this.lineas = await this.servicioListas.getListaPorRangoLineasSafe(this.lineasDisponibles);
    } else {
      this.lineas = await this.servicioListas.getListaLineasSafe();
    }
    console.log(this.lineas);
  }

  onInputChange() {
    console.log(parseInt(this.codigoDesdeInput.nativeElement.value))
    console.log(parseInt(this.codigoHastaInput.nativeElement.value))
    if (parseInt(this.codigoDesdeInput.nativeElement.value) <= parseInt(this.codigoHastaInput.nativeElement.value)) {
      this.codigosEscogidos.emit([parseInt(this.codigoDesdeInput.nativeElement.value), parseInt(this.codigoHastaInput.nativeElement.value )]);
    }
  }


}
