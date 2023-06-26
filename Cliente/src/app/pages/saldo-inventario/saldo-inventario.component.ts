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
  lineasSeleccionadas: any[] = [];
  listaPermisos: Permiso[] = [];
  lineasDisponibles: String = "";
  localesDisponibles: number[] = [];
  codigoServicio: String = "080509";
  ListaPermisos = [
    { nombre: "09", valor: "Saldo de inventarios" },
    { nombre: "04", valor: "Refrescar" },
    { nombre: "08", valor: "Imprimir" },
    { nombre: "14", valor: "Excel" },
    { nombre: "15", valor: "Word" },
    { nombre: "15", valor: "PDF" },
    { nombre: "50", valor: "Nacional" },
    { nombre: "51", valor: "Local" },
    { nombre: "54", valor: "Zona" },
    { nombre: "60", valor: "Costo Unitario" }
  ];

  constructor(private permisos: ObtenerPermisosService) { }

  typesOfNivel: string[] = ['Nacional', 'Zona', 'Local'];
  optionLinea: string[] = ['Nacional', 'Zona', 'Local', 'Nacional', 'Zona', 'Local'];

  async ngOnInit() {
    let codigos = await this.permisos.permisosDisponibles(this.codigoServicio);
    this.lineasDisponibles = await this.permisos.lineasDisponibles(this.codigoServicio);
    this.localesDisponibles = await this.permisos.localesDisponibles(this.codigoServicio);
  }


  handleLocalesSeleccionados(locales: any[]) {
    this.localesSeleccionados = locales;
  }

  handleLineasSeleccionadas(lineas: any[]) {
    this.lineasSeleccionadas = lineas;
  }

  //borrar despues solo para pruebas

  imprimirLocales(){
    console.log(this.localesSeleccionados);
  }

}
