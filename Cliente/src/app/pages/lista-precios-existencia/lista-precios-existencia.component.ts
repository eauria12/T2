import { Component, ViewChild } from '@angular/core';
import { Permiso } from 'src/app/interfaces/permiso';
import { ObtenerPermisosService } from 'src/app/services/obtener-permisos.service'
import Swal from 'sweetalert2';
import { ObtenerListaPreciosExistenciaService} from 'src/app/services/lista-precio-existencia/obtener-lista-precios-existencia.service';
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
  mostrarListaLineas:boolean = false;
  selected: string | null = null; // Variable para almacenar el valor seleccionado
  inventario!: string;
  loading: boolean = true;
  activityValues: number[] = [10, 25,50];
  listaPreciosExistencia:Existencia[]=[];

  constructor(private permisos: ObtenerPermisosService,private obtenerListaPreciosExistencia:ObtenerListaPreciosExistenciaService) { }


  async ngOnInit() {
    //Implementación de alerta x usuario sin autorización
    this.listaPermisos = await this.permisos.getPermisosSafe(this.codigoServicio).catch((error) => {this.autorizado=true});
    if (this.autorizado) {
      this.showAlert();
    }else{
      this.lineasDisponibles = await this.permisos.lineasDisponibles(this.codigoServicio);
      this.loading = false;
      this.listaPreciosExistencia = await this.obtenerListaPreciosExistencia.getListPrecioExistencia();
      this.filtrarDatos();

      

    }




  }

  //Implementación de alerta x usuario sin autorización
  showAlert() {
    Swal.fire({
      title: 'USUARIO NO AUTORIZADO',
      icon: 'warning', // Puedes usar 'success', 'error', 'warning', 'info', 'question' u otros íconos personalizados
    });  }

    handleLineasSeleccionadas(lineas: any[]) {
      this.lineasSeleccionadas = lineas;
    }
  

    onSelectionChange(event: any) {
      this.selected = event;
    }


     filtrarDatos(){
      
    }
    buscarExistencias(){}


  }
