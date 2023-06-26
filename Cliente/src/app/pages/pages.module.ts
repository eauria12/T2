import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesRoutes } from './pages.routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { SaldoInventarioComponent } from './saldo-inventario/saldo-inventario.component';
import { TablasComponent} from './ui-components/tablas/tablas.component';
import { ListaLocalesComponent } from './ui-components/lists/lista-locales/lista-locales.component';
import { ListaLineasComponent } from './ui-components/lists/lista-lineas/lista-lineas.component';

@NgModule({
  declarations: [AppDashboardComponent, 
    SaldoInventarioComponent,
    TablasComponent,
    ListaLocalesComponent,
    ListaLineasComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    NgApexchartsModule,
    RouterModule.forChild(PagesRoutes),
    TablerIconsModule.pick(TablerIcons),
  ],
  exports: [TablerIconsModule,TablasComponent,ListaLocalesComponent],
})
export class PagesModule {}
