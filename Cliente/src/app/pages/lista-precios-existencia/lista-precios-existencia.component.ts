import { Component, ViewChild } from '@angular/core';
import { Permiso } from 'src/app/interfaces/permiso';
import { ObtenerPermisosService } from 'src/app/services/obtener-permisos.service'
import Swal from 'sweetalert2';
import { ObtenerListaPreciosExistenciaService } from 'src/app/services/lista-precio-existencia/obtener-lista-precios-existencia.service';
import { Existencia } from 'src/app/interfaces/existencia';

@Component({
  selector: 'app-lista-precios-existencia',
  templateUrl: './lista-precios-existencia.component.html',
  styleUrls: ['./lista-precios-existencia.component.scss']

})
export class ListaPreciosExistenciaComponent {
  autorizado: boolean = false;
  listaPermisos: Permiso[] = [];
  codigoServicio: String = "080506";
  lineasDisponibles: String = "";
  lineasSeleccionadas: any[] = [];
  mostrarListaLineas: boolean = false;
  selected: string; 
  inventario!: string;
  loading: boolean = true;
  activityValues: number[] = [10, 25, 50];
  listaPreciosExistencia: Existencia[] = [];
  listaPreciosExistenciaFiltrados: Existencia[] = [];

  vistaAtabla:[string[],string[]];
 
  vistaTabla: boolean = false;

  labelslantasOReencauche = [
    "IdItem", "NombreLinea",
    "familia", "diseño", "medida", "aro", "marca", "aplicación", "letra",
    "ic", "iv", "pr", "pais_origen", "Código_Prov", "PrecioMasIva", "Total_Nacional"
  ]//se verifica cuando se tenga los datos

  labelsvistaAllLubricantes = [
    "IdItem", "NombreLinea",
    "familia", "diseño", "presentacion", "marca", "aplicación", "API", "SAE",
    "pais_origen", "Código_Prov", "PrecioMasIva", "Total_Nacional"
  ]
  labelsvistaAllBaterias = [
    "IdItem", "NombreLinea",
    "familia", "diseño", "polar", "capacidad", "voltios", "placas",
    "pais_origen", "Código_Prov", "PrecioMasIva", "Total_Nacional"
  ]
  labelsvistaOtros = [
    'IdItem',
    'NombreLinea',
    'Descripción',
    'Código_Prov',
    'PrecioMasIva',
    'Total_Nacional'
  ]

  headerLantasOReencauche = [
    "CÓDIGO SAIA", "LÍNEA",
    "FAMILIA", "DISEÑO", "MEDIDA", "ARO", "MARCA", "APLICACIÓN", "LETRA",
    "IC", "IV", "PR", "PAÍS ORIGEN", "CÓDIGO PROVEEDOR", "P.V.P. INCL.IVA", "INVENTARIO NACIONAL"
  ]

  headervistaAllLubricantes = [
    "CÓDIGO SAIA", "LÍNEA",
    "FAMILIA", "DISEÑO", "PRESENTACIÓN", "MARCA", "APLICACIÓN", "API", "SAE",
    "PAÍS ORIGEN", "CÓDIGO PROVEEDOR", "P.V.P. INCL.IVA", "INVENTARIO NACIONAL"
  ]
  headervistaAllBaterias = [
    "CÓDIGO SAIA", "LÍNEA",
    "FAMILIA", "DISEÑO", "POLAR", "CAPACIDAD", "VOLTIOS", "PLACAS",
    "PAÍS ORIGEN", "CÓDIGO PROVEEDOR", "P.V.P. INCL.IVA", "INVENTARIO NACIONAL"
  ]
  headervistaOtros = [
    "CÓDIGO SAIA",
    "LÍNEA",
    "DESCRIPCIÓN",
    "CÓDIGO PROVEEDOR",
    "P.V.P. INCL.IVA",
    "INVENTARIO NACIONAL"
  ]

  locales = [
    "4",
    "5",
    "8",
    "9",
    "10",
    "11",
    "15",
    "20",
    "22",
    "23",
    "24",
    "26",
    "27",
    "32",
    "34",
    "35",
    "37",
    "38",
    "80",
    "82",
    "83",
    "84",
    "86",
    "87",
    "88",
    "89"
  ];
  localesValues: Existencia[];


  constructor(private permisos: ObtenerPermisosService, private obtenerListaPreciosExistencia: ObtenerListaPreciosExistenciaService) { }


  async ngOnInit() {
    this.listaPermisos = await this.permisos.getPermisosSafe(this.codigoServicio).catch((error) => { this.autorizado = true });
    if (this.autorizado) {
      this.showAlert("USUARIO NO AUTORIZADO");
    } else {
      this.lineasDisponibles = await this.permisos.lineasDisponibles(this.codigoServicio);
      this.listaPreciosExistencia = await this.obtenerListaPreciosExistencia.getListPrecioExistencia();
      this.loading = false;
    }

  }

  showAlert(label: string) {
    Swal.fire({
      title: label,
      icon: 'warning', 
      timer: 1500

    });
  }
  showAlertLoading(label: string) {
    Swal.fire({
      title: label,
      icon: 'info',
      timer: 1500,
      showConfirmButton: false,

    });
  }

  onSelectionChange(event: any) {
    this.selected = event;
  }


  buscarExistencias() {
    this.showAlertLoading("Cargando datos...")
    if (this.selected != null) {
      this.cargarTabla();
    }
    else {
      this.showAlert("Seleccione una linea por favor");
    }

  }
  cargarTabla() {
    this.vistaAtabla=[[],[]];
    this.vistaTabla=true;
    this.handleLineasSeleccionadas(this.selected.split("-")[1].trim());
    this.localesValues = this.locales.map((clave) => this.listaPreciosExistencia[parseInt(clave)]);
    this.listaPreciosExistenciaFiltrados = this.listaPreciosExistencia.filter(objeto => objeto.NombreLinea.replace(/\s+/g, "") === this.selected.replace(/\s+/g, ""));
    if (this.listaPreciosExistenciaFiltrados.length == 0) {
      this.showAlert("No existen datos para mostrar");
    }
  }

  handleLineasSeleccionadas(seleccionadoTabla: string) {

    if (seleccionadoTabla == "REENCAUCHE") {
      this.vistaAtabla=[this.headerLantasOReencauche,this.labelslantasOReencauche]
    } else if (seleccionadoTabla.includes("LUBRICANTES")) {
      this.vistaAtabla=[this.headervistaAllLubricantes,this.labelsvistaAllLubricantes]
    } else if (seleccionadoTabla.includes("BATERIAS")) {
      this.vistaAtabla=[this.headervistaAllBaterias,this.labelsvistaAllBaterias]
    } else {
      this.vistaAtabla=[this.headervistaOtros,this.labelsvistaOtros]
    }
  }
}