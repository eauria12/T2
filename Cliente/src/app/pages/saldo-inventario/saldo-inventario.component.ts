import { Component, NgModule } from '@angular/core';
import { TablasComponent } from '../ui-components/tablas/tablas.component';
import { Permiso } from 'src/app/interfaces/permiso';
import {ObtenerPermisosService} from 'src/app/services/obtener-permisos.service'



@Component({
  selector: 'app-saldo-inventario',
  templateUrl: './saldo-inventario.component.html',
  styleUrls: ['./saldo-inventario.component.scss'] 
})
export class SaldoInventarioComponent {

  localesSeleccionados: any[] = [];
  listaPermisos: Permiso[] = [];
  codigoServicio: String = "080509";
  ListaPermisos = [
    { nombre: "Elemento 1", valor: 10 },
    { nombre: "Elemento 2", valor: 20 },
    { nombre: "Elemento 3", valor: 30 }
  ];

  constructor(private permisos: ObtenerPermisosService) { }

  typesOfNivel: string[] = ['Nacional', 'Zona', 'Local'];
  optionLinea: string[] = ['Nacional', 'Zona', 'Local', 'Nacional', 'Zona', 'Local'];

  async ngOnInit() {
    let codigos = this.permisos.permisosDisponibles(this.codigoServicio);
    console.log(codigos);
  }


  handleLocalesSeleccionados(locales: any[]) {
    this.localesSeleccionados = locales;
  }

  //borrar despues solo para pruebas

  imprimirLocales(){
    console.log(this.localesSeleccionados);
  }

}
