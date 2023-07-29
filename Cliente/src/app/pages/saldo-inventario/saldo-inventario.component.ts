import { Component, NgModule, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { TablasComponent } from '../ui-components/tablas/tablas.component';
import { Permiso } from 'src/app/interfaces/permiso';
import { ObtenerPermisosService } from 'src/app/services/obtener-permisos.service'
import { LocalIdService } from 'src/app/services/resources/local.service';



@Component({
  selector: 'app-saldo-inventario',
  templateUrl: './saldo-inventario.component.html',
  styleUrls: ['./saldo-inventario.component.scss']
})
export class SaldoInventarioComponent {

  @ViewChild('nivel') nivelList: MatSelectionList;

  protected buscarClicked: boolean = false;
  localesSeleccionados: any[] = [];
  lineasSeleccionadas: any[] = [];
  NivelLocal: String = "";
  listaPermisos: Permiso[] = [];
  opcionesNivel: boolean[] = []
  lineasDisponibles: String = "";
  localesDisponibles: number[] = [];
  codigoServicio: String = "080509";
  localId:string | null;
  constructor(private permisos: ObtenerPermisosService,private LocalIdService: LocalIdService) { }

  typesOfNivel: string[] = ['Nacional', 'Zona', 'Local'];
  presentacion: string[] = ['Saldos Consolidados', 'Saldos por Local'];
  lineArticulo: string[] = ['Por Código', 'Por línea'];
  zona: string[] = ['Nacional', 'Zona Centro-Norte', 'Zona Sur'];
  acceso: boolean = false

  async ngOnInit() {
    this.listaPermisos = await this.permisos.getPermisosSafe(this.codigoServicio);
    this.opcionesNivel = await this.permisos.permisosNivel(this.codigoServicio);
    console.log("Las opciones");
    console.log(this.opcionesNivel);
    this.lineasDisponibles = await this.permisos.lineasDisponibles(this.codigoServicio);
    this.localesDisponibles = await this.permisos.localesDisponibles(this.codigoServicio);
    this.acceso = true;
    this.localId = this.LocalIdService.getLocalId();
  
  }


  handleLocalesSeleccionados(locales: any[]) {
    this.localesSeleccionados = locales;
  }

  handleLineasSeleccionadas(lineas: any[]) {
    this.lineasSeleccionadas = lineas;
  }

  handleNivelSeleccionado() {
    // Verificamos si "Nacional" está seleccionado
    if (this.nivelList.selectedOptions.selected.length > 0) {
      if (this.nivelList.selectedOptions.selected[0].value === this.typesOfNivel[0]) {
        this.NivelLocal = "Nacional";
        console.log("Seleccione nacional");
      } else if (this.nivelList.selectedOptions.selected[0].value === this.typesOfNivel[1]) {
        this.NivelLocal = "Zona";
        console.log("Seleccione Zona");
      } else if (this.nivelList.selectedOptions.selected[0].value === this.typesOfNivel[2]) {
        this.NivelLocal = "Local";
        console.log("Seleccione Local");
      }
    }
  }

  buscarLocales() {
    //this.buscarClicked = true;
  }

  //borrar despues solo para pruebas

  imprimirTabla() {
    this.buscarClicked = true;
    console.log("hola again");
    console.log(this.localesSeleccionados);
    console.log(this.lineasSeleccionadas);
  }


  mostrarLocalId(): void {
    this.localId=this.LocalIdService.getLocalId();//aqui esta guardado, en el servicio this.LocalIdService.getLocalId()
    console.log(this.localId);
    // Puedes usar el valor de localId según tus necesidades.
  }

}
