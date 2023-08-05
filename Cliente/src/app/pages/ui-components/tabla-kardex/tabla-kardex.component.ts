import { Component, ViewChild } from '@angular/core';
import { Permiso } from 'src/app/interfaces/permiso';
import { ObtenerPermisosService } from 'src/app/services/obtener-permisos.service'
import Swal from 'sweetalert2';
import { ObtenerListaPreciosExistenciaService } from 'src/app/services/lista-precio-existencia/obtener-lista-precios-existencia.service';
import { Existencia } from 'src/app/interfaces/existencia';

@Component({
  selector: 'app-tabla-kardex',
  templateUrl: './tabla-kardex.component.html',
  styleUrls: ['./tabla-kardex.component.scss']
})
export class TablaKardexComponent {
  listaPreciosExistenciaFiltrados: Existencia[] = [];

  

}
