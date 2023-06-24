import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { SaldoInventarioComponent } from './saldo-inventario/saldo-inventario.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: SaldoInventarioComponent,
    data: {
      title: 'Starter Page',
    },
  },
  
];
