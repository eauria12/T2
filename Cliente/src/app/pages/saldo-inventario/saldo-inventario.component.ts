import { Component, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { Permiso } from 'src/app/interfaces/permiso';
import { ObtenerPermisosService } from 'src/app/services/obtener-permisos.service'
import { LocalIdService } from 'src/app/services/resources/local.service';
import { ObtenerLocalInfoService } from 'src/app/services/obtener-local-info.service';
import Swal from 'sweetalert2';

const presentacionConsolidado: string = "C";
const presentacionLocal: string = "L";

@Component({
  selector: 'app-saldo-inventario',
  templateUrl: './saldo-inventario.component.html',
  styleUrls: ['./saldo-inventario.component.scss']
})
export class SaldoInventarioComponent {

  @ViewChild('nivel') nivelList: MatSelectionList;
  @ViewChild('zon') zonaList: MatSelectionList;
  @ViewChild('lineArt') lineArt: MatSelectionList;
  @ViewChild('present') present: MatSelectionList;

  protected autorizado: boolean = false;
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
  zonaId: number;
  mostrarListaLineas: boolean = false;
  mostrarFiltroCodigo: boolean = false;
  formatoPresentacion: String;
  

  constructor(private permisos: ObtenerPermisosService, private LocalIdService: LocalIdService, private obtenerLocal: ObtenerLocalInfoService) { }

  typesOfNivel: string[] = ['Nacional', 'Zona', 'Local'];
  presentacion: string[] = ['Saldos Consolidados', 'Saldos por Local'];
  lineArticulo: string[] = ['Por Código de Artículo', 'Por Línea de Artículo'];
  zona: string[] = ['Nacional', 'Zona Centro-Norte', 'Zona Sur'];
  zonasPermitidas: boolean[] = [true, true, true];
  acceso: boolean = false

  async ngOnInit() {
    this.listaPermisos = await this.permisos.getPermisosSafe(this.codigoServicio).catch((error) => { this.autorizado = true });
    console.log(this.listaPermisos);
    console.log(this.autorizado);
    if (this.autorizado || this.listaPermisos.length == 0) {
      this.showAlert("USUARIO NO AUTORIZADO");
      this.autorizado = true;
    } else {
    this.localesDisponibles = await this.permisos.localesDisponibles(this.codigoServicio);
    this.opcionesNivel = await this.permisos.permisosNivel(this.codigoServicio);
    this.permisoCostoUnitario = await this.permisos.permisoCostoUnitario(this.codigoServicio);
    this.lineasDisponibles = await this.permisos.lineasDisponibles(this.codigoServicio);
    this.acceso = true;
    this.localId = this.LocalIdService.getLocalId();
    this.zonaId = await this.obtenerLocal.getLocalZona(this.localId);
    }
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
    if (this.nivelList.selectedOptions.selected.length > 0) {
      if (this.nivelList.selectedOptions.selected[0].value === this.typesOfNivel[0]) {
        this.setInformacionNivel(false,"Nacional")
      } else if (this.nivelList.selectedOptions.selected[0].value === this.typesOfNivel[1]) {
        this.setInformacionNivel(true,"")
      } else if (this.nivelList.selectedOptions.selected[0].value === this.typesOfNivel[2]) {
        this.setInformacionNivel(false,"Local")
      }
    }
  }

  setInformacionNivel(zonaSeleccionada : boolean, niveldelLocal: string){
    this.zonaSelected = zonaSeleccionada;
    this.NivelLocal = niveldelLocal;
    if (this.zonaSelected){
      if (this.opcionesNivel[2]) {
        this.zonasPermitidas[this.zonaId]= false;
      } else {
        this.zonasPermitidas = [false, false, false];
      }
    }
  }

  handleCodigosElegidos(codigos: number[]) {
    this.codigosElegidos = codigos;
  }

  onZonaSeleccionada(zon: string) {
    if (this.zonaList.selectedOptions.selected.length > 0) {
      if (zon === "Nacional") {
        this.NivelLocal = "Nacional";
      } else if (zon === this.zona[1]) {
        this.NivelLocal = "Zona 1";
      } else if (zon === this.zona[2]) {
        this.NivelLocal = "Zona 2";
      }
    }
  }

  filtraArticulos(lineArticulo: string) {
    if (this.lineArt.selectedOptions.selected.length > 0) {
      if (lineArticulo === this.lineArticulo[0]) {
        this.mostrarListaLineas = false;
        this.mostrarFiltroCodigo = true;
      } else if (lineArticulo === this.lineArticulo[1]) {
        this.mostrarListaLineas = true;
        this.mostrarFiltroCodigo = false;
      }
    }
  }

  escogeArticulos(formatoPresentar: string) {
    if (this.present.selectedOptions.selected.length > 0) {
      if (formatoPresentar === this.presentacion[0]) {
        this.formatoPresentacion = presentacionConsolidado;
      } else if (formatoPresentar === this.presentacion[1]) {
        this.formatoPresentacion = presentacionLocal;
      }
    }
  }

  limpiar() {
    window.location.href = "/saldo-inventario";
  }
  
  showAlert(label: string) {
    Swal.fire({
      title: label,
      icon: 'warning', 
      timer: 1500

    });
  }

  imprimirTabla() {
    if (this.localesSeleccionados.length == 0) {
      this.showAlert("Seleccione local/es");
      this.buscarClicked = false;
    }

    if (this.lineasSeleccionadas.length == 0) {
      this.showAlert("Seleccione linea/s");
      this.buscarClicked = false;
    }

    if (this.present.selectedOptions.selected.length == 0) {
      this.showAlert("Seleccione una presentación");
      this.buscarClicked = false;
    }


    this.buscarClicked = true;
  }


}
