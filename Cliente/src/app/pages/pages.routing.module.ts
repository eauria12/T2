import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { SaldoInventarioComponent } from './saldo-inventario/saldo-inventario.component';
import { ListaPreciosExistenciaComponent } from './lista-precios-existencia/lista-precios-existencia.component';
import { ListadoFacturasEntregasPendientesComponent } from './listado-facturas-entregas-pendientes/listado-facturas-entregas-pendientes.component'
import { ComprobantesElectronicosComponent } from './comprobantes-electronicos/comprobantes-electronicos.component';
import { KardexMercaderiaComponent } from './kardex-mercaderia/kardex-mercaderia.component'; 

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
    component: ListadoFacturasEntregasPendientesComponent,
    data: {
      title: 'Listado facturas entregas pendientes Page',
    },
  },
  {
    path: 'comprobantes-electronicos',
    component: ComprobantesElectronicosComponent,
    data: {
      title: 'Comprobantes Electronicos Page',
    },
  },
  {
    path: 'kardex-mercaderia',
    component: KardexMercaderiaComponent,
    data: {
      title: 'Kardex Mercaderia Page',
    },
  },
  
];
