import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { AuthGuard } from './services/authentication/AuthGuard/auth.guard';
import { SaldoInventarioComponent } from './pages/saldo-inventario/saldo-inventario.component';
import { ListaPreciosExistenciaComponent } from './pages/lista-precios-existencia/lista-precios-existencia.component';
import {ListadoFacturasEntregasPendientesComponent} from './pages/listado-facturas-entregas-pendientes/listado-facturas-entregas-pendientes.component'
import { ComprobantesElectronicosComponent } from './pages/comprobantes-electronicos/comprobantes-electronicos.component';
import { KardexMercaderiaComponent } from './pages/kardex-mercaderia/kardex-mercaderia.component'; 

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',
        redirectTo: '/authentication/login',
        pathMatch: 'full',
      },
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard] ,
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.module').then((m) => m.ExtraModule),
      },
      {
        path: 'saldo-inventario',
        canActivate: [AuthGuard] ,
        component: SaldoInventarioComponent
      },
      {
        path: 'precio-existencia',
        canActivate: [AuthGuard] ,
        component: ListaPreciosExistenciaComponent
      },
      {
        path: 'listado-facturas-entregas-pendientes',
        canActivate: [AuthGuard] ,
        component: ListadoFacturasEntregasPendientesComponent
      },
      {
        path: 'comprobantes-electronicos',
        canActivate: [AuthGuard] ,
        component: ComprobantesElectronicosComponent
      },
      {
        path: 'kardex-mercaderia',
        canActivate: [AuthGuard] ,
        component: KardexMercaderiaComponent
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
