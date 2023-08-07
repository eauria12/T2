import { Component, NgModule, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { TablasComponent } from '../ui-components/tablas/tablas.component';
import { Permiso } from 'src/app/interfaces/permiso';
import { ObtenerPermisosService } from 'src/app/services/obtener-permisos.service'
import { LocalIdService } from 'src/app/services/resources/local.service';
import { ObtenerLocalInfoService } from 'src/app/services/obtener-local-info.service';

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
  fechaInicio: Date ;
  fechaFin: Date ;
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
    // Verificamos si "Nacional" está seleccionado
    if (this.nivelList.selectedOptions.selected.length > 0) {
      if (this.nivelList.selectedOptions.selected[0].value === this.typesOfNivel[0]) {
        this.zonaSelected = false;
        this.NivelLocal = "Nacional";
        this.seleccionNivel ="N";
        console.log("Seleccione nacional");
      } else if (this.nivelList.selectedOptions.selected[0].value === this.typesOfNivel[1]) {
        this.zonaSelected = true;
        console.log("Seleccione Zona");
        this.seleccionNivel ="Z";
        console.log(this.opcionesNivel[2]);
        if (this.opcionesNivel[2]) {
          console.log("Zonas limitadas al usuario");
          this.zonasPermitidas[this.zonaId]= false;
        }
      } else if (this.nivelList.selectedOptions.selected[0].value === this.typesOfNivel[2]) {
        this.zonaSelected = false;
        this.NivelLocal = "Local";
        this.seleccionNivel ="L";
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

  onPresentacionSeleccionada(pr: string) {
    if (this.presentacionList.selectedOptions.selected.length > 0) {
      if ( pr === this.presentacion[0]) {
        this.localSeleccion = true;
        console.log("Seleccione por local");
      } else if (pr === this.presentacion[1]) {
        this.localSeleccion = false;
        console.log("Seleccione en locales");
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
