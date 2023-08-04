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
  selected: string; // Variable para almacenar el valor seleccionado
  inventario!: string;
  loading: boolean = true;
  activityValues: number[] = [10, 25, 50];
  listaPreciosExistencia: Existencia[] = [];
  listaPreciosExistenciaFiltrados: Existencia[] = [];

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
    //Implementación de alerta x usuario sin autorización
    this.listaPermisos = await this.permisos.getPermisosSafe(this.codigoServicio).catch((error) => { this.autorizado = true });
    if (this.autorizado) {
      this.showAlert("USUARIO NO AUTORIZADO");
    } else {
      this.lineasDisponibles = await this.permisos.lineasDisponibles(this.codigoServicio);
      this.listaPreciosExistencia = await this.obtenerListaPreciosExistencia.getListPrecioExistencia();
      this.loading = false;
    }




  }

  //Implementación de alerta x usuario sin autorización
  showAlert(label: string) {
    Swal.fire({
      title: label,
      icon: 'warning', // Puedes usar 'success', 'error', 'warning', 'info', 'question' u otros íconos personalizados
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
  handleLineasSeleccionadas(lineas: any[]) {
    this.lineasSeleccionadas = lineas;
  }


  onSelectionChange(event: any) {
    this.selected = event;
  }


  buscarExistencias() {//button method
    this.showAlertLoading("Cargando datos...")
    if (this.selected != null) {
      this.cargarTabla();
    }
    else {
      this.showAlert("Seleccione una linea por favor");
    }

  }
  cargarTabla() {
    this.localesValues = this.locales.map((clave) => this.listaPreciosExistencia[parseInt(clave)]);
    this.listaPreciosExistenciaFiltrados = this.listaPreciosExistencia.filter(objeto => objeto.NombreLinea.replace(/\s+/g, "") === this.selected.replace(/\s+/g, ""));
    if (this.listaPreciosExistenciaFiltrados.length == 0) {
      this.showAlert("No existen datos para mostrar");
    }
  }


}
