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
  @ViewChild('zon') zonaList: MatSelectionList;
  @ViewChild('lineArt') lineArt: MatSelectionList;
  
  protected buscarClicked: boolean = false;
  fechaInicio: Date = new Date(1900, 1, 1);
  fechaFin: Date = new Date(2200, 31, 12);
  localesSeleccionados: any[] = [];
  zonaSelected: boolean = false;
  lineasSeleccionadas: any[] = [];
  opcionesNivel: boolean[] = []
  NivelLocal: String = "";
  listaPermisos: Permiso[] = [];
  codigosElegidos: number[] = []
  lineasDisponibles: String = "";
  localesDisponibles: number[] = [];
  codigoServicio: String = "080509";
  permisoCostoUnitario: boolean;
  localId: string | null;
  mostrarListaLineas:boolean = false;
  mostrarFiltroCodigo:boolean = false;

  constructor(private permisos: ObtenerPermisosService, private LocalIdService: LocalIdService) { }

  typesOfNivel: string[] = ['Nacional', 'Zona', 'Local'];
  presentacion: string[] = ['Saldos Consolidados', 'Saldos por Local'];
  lineArticulo: string[] = ['Por Código de Artículo', 'Por Línea de Artículo'];
  zona: string[] = ['Nacional', 'Zona Centro-Norte', 'Zona Sur'];
  acceso: boolean = false

  async ngOnInit() {
    this.listaPermisos = await this.permisos.getPermisosSafe(this.codigoServicio);
    this.opcionesNivel = await this.permisos.permisosNivel(this.codigoServicio);
    this.permisoCostoUnitario = await this.permisos.permisoCostoUnitario(this.codigoServicio);
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

  handleFechaInicio(Incio: Date) {
    this.fechaInicio = Incio;
  }

  handleFechaFin(Fin: Date) {
    this.fechaFin = Fin;
  }

  handleNivelSeleccionado() {
    // Verificamos si "Nacional" está seleccionado
    if (this.nivelList.selectedOptions.selected.length > 0) {
      if (this.nivelList.selectedOptions.selected[0].value === this.typesOfNivel[0]) {
        this.zonaSelected = false;
        this.NivelLocal = "Nacional";
        console.log("Seleccione nacional");
      } else if (this.nivelList.selectedOptions.selected[0].value === this.typesOfNivel[1]) {
        this.zonaSelected = true;
        console.log("Seleccione Zona");
      } else if (this.nivelList.selectedOptions.selected[0].value === this.typesOfNivel[2]) {
        this.zonaSelected = false;
        this.NivelLocal = "Local";
        console.log("Seleccione Local");
      }
    }
  }

  handleCodigosElegidos(codigos: number[]) {
    this.codigosElegidos = codigos;
    console.log(this.codigosElegidos);
  }

  onZonaSeleccionada(zon: string) {
    if (this.zonaList.selectedOptions.selected.length > 0) {
      if (zon === "Nacional") {
        this.NivelLocal = "Nacional";
        console.log("Seleccione nacional");
      } else if (zon === this.zona[1]) {
        this.NivelLocal = "Zona 1";
        console.log("Seleccione Centro-Norte");
      } else if (zon === this.zona[2]) {
        this.NivelLocal = "Zona 2";
        console.log("Seleccione Sur");
      }
    }
  }


  filtraArticulos(lineArticulo: string) {
    console.log("Filtro ");
    if (this.lineArt.selectedOptions.selected.length > 0) {
      console.log("Evento Filtro ");
      if (lineArticulo === this.lineArticulo[0]) {
        this.mostrarListaLineas = false;
        this.mostrarFiltroCodigo = true;
        console.log("Filtro codigo");
      } else if (lineArticulo === this.lineArticulo[1]) {
        this.mostrarListaLineas = true;
        this.mostrarFiltroCodigo = false;
        console.log("Lista lineas");
      }
    }
  }

  buscarLocales() {
    //this.buscarClicked = true;
  }

  limpiar(){
    window.location.href="/saldo-inventario";
  }

  //borrar despues solo para pruebas

  imprimirTabla() {
    this.buscarClicked = true;
    console.log("hola again");
    console.log(this.localesSeleccionados);
    console.log(this.lineasSeleccionadas);
  }

}
