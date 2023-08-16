import { Component, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { Permiso } from 'src/app/interfaces/permiso';
import { ObtenerPermisosService } from 'src/app/services/obtener-permisos.service'
import { LocalIdService } from 'src/app/services/resources/local.service';
import { ObtenerLocalInfoService } from 'src/app/services/obtener-local-info.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-kardex-mercaderia',
  templateUrl: './kardex-mercaderia.component.html',
  styleUrls: ['./kardex-mercaderia.component.scss']
})
export class KardexMercaderiaComponent {
  @ViewChild('nivel') nivelList: MatSelectionList;
  @ViewChild('zon') zonaList: MatSelectionList;
  @ViewChild('present') presentacionList: MatSelectionList;
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
  codigoServicio: String = "080507";
  permisoCostoUnitario: boolean;
  localId: string | null;
  zonaId :number ;
  mostrarFiltroCodigo:boolean = true;
  stock = "S"
  seleccionNivel = "L"
  localSeleccion: boolean;

  constructor(private permisos: ObtenerPermisosService, private LocalIdService: LocalIdService, private obtenerLocal: ObtenerLocalInfoService) { }

  typesOfNivel: string[] = ['Nacional', 'Zona', 'Local'];
  presentacion: string[] = ['Movimientos por Local', 'Movimientos en Locales'];
  zona: string[] = ['Nacional', 'Zona Centro-Norte', 'Zona Sur'];
  zonasPermitidas: boolean[] = [true, true, true];
  acceso: boolean = false;
  

  async ngOnInit() {
    this.localesDisponibles = await this.permisos.localesDisponibles(this.codigoServicio);
    this.listaPermisos = await this.permisos.getPermisosSafe(this.codigoServicio);
    this.opcionesNivel = await this.permisos.permisosNivel(this.codigoServicio);
    this.permisoCostoUnitario = await this.permisos.permisoCostoUnitario(this.codigoServicio);
    this.lineasDisponibles = await this.permisos.lineasDisponibles(this.codigoServicio);
    this.acceso = true;
    this.localId = this.LocalIdService.getLocalId();
    this.zonaId = await this.obtenerLocal.getLocalZona(this.localId);
  }

  handleLocalesSeleccionados(locales: any[]) {
    this.localesSeleccionados = locales;
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
        this.setInformacionNivel(false,"Nacional","N")
      } else if (this.nivelList.selectedOptions.selected[0].value === this.typesOfNivel[1]) {
        this.setInformacionNivel(true,"","Z")
      } else if (this.nivelList.selectedOptions.selected[0].value === this.typesOfNivel[2]) {
        this.setInformacionNivel(false,"Local","L")
      }
    }
  }

  setInformacionNivel(zonaSeleccionada : boolean, niveldelLocal: string, seleccionDeNivel: string){
    this.zonaSelected = zonaSeleccionada;
    this.NivelLocal = niveldelLocal;
    this.seleccionNivel = seleccionDeNivel;
    if (this.seleccionNivel === "Z"){
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

  onPresentacionSeleccionada(pr: string) {
    if (this.presentacionList.selectedOptions.selected.length > 0) {
      if ( pr === this.presentacion[0]) {
        this.localSeleccion = true;
      } else if (pr === this.presentacion[1]) {
        this.localSeleccion = false;
      }
    }
  }

  limpiar(){
    window.location.href="/saldo-inventario";
  }

  imprimirTabla() {
    Swal.fire({
      title: 'Cargando',
      icon: 'info',
      timer: 3000,
      showConfirmButton: false,

    });
    this.buscarClicked = true;
  }

}
