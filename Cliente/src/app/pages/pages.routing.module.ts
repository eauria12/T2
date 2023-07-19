import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { SaldoInventarioComponent } from './saldo-inventario/saldo-inventario.component';
import { ListaPreciosExistenciaComponent } from './lista-precios-existencia/lista-precios-existencia.component';
import {ListadoFacturasEntregasPendientesComponent} from './listado-facturas-entregas-pendientes/listado-facturas-entregas-pendientes.component'

export const PagesRoutes: Routes = [
  {
    path: '',
    component: AppDashboardComponent,
    data: {
      title: 'Starter Page',
    },
  },
  {
    path: 'saldo-inventario',
    component: SaldoInventarioComponent,
    data: {
      title: 'Saldo inventario Page',
    },
  },
  {
    path: 'precio-existencia',
    component: ListaPreciosExistenciaComponent,
    data: {
      title: 'Precio Existencia Page',
    },
  },
  {
    path: 'listado-facturas-entregas-pendientes',
    component: ListaPreciosExistenciaComponent,
    data: {
      title: 'Listado facturas entregas pendientes Page',
    },
  },
];
