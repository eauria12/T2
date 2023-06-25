import { Component, NgModule } from '@angular/core';
import { TablasComponent } from '../ui-components/tablas/tablas.component';



@Component({
  selector: 'app-saldo-inventario',
  templateUrl: './saldo-inventario.component.html',
  styleUrls: ['./saldo-inventario.component.scss'] 
})
export class SaldoInventarioComponent {

  localesSeleccionados: any[] = [];

  constructor() { }
  typesOfNivel: string[] = ['Nacional', 'Zona', 'Local'];
  optionLinea: string[] = ['Nacional', 'Zona', 'Local', 'Nacional', 'Zona', 'Local'];

  ngOnInit(): void {
    
  }

  imprimirLocales(){
    console.log(this.localesSeleccionados);
  }

  handleLocalesSeleccionados(locales: any[]) {
    this.localesSeleccionados = locales;
  }

}
