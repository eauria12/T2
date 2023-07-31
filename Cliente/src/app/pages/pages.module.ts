import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesRoutes } from './pages.routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgApexchartsModule } from 'ng-apexcharts';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { AppDashboardComponent } from './dashboard/dashboard.component';
//Se importan las ventanas
import { SaldoInventarioComponent } from './saldo-inventario/saldo-inventario.component';
import { ListaPreciosExistenciaComponent } from './lista-precios-existencia/lista-precios-existencia.component';
import { ListadoFacturasEntregasPendientesComponent } from './listado-facturas-entregas-pendientes/listado-facturas-entregas-pendientes.component';
import { ComprobantesElectronicosComponent } from './comprobantes-electronicos/comprobantes-electronicos.component';

//Se importan los componentes
import { TablasComponent} from './ui-components/tablas/tablas.component';
import { ListaLocalesComponent } from './ui-components/lists/lista-locales/lista-locales.component';
import { ListaLineasComponent } from './ui-components/lists/lista-lineas/lista-lineas.component';
import { SelectLocalesComponent} from './ui-components/select-locales/select-locales.component';
import { FiltroFechaComponent } from './ui-components/filtro-fecha/filtro-fecha.component';
import { SelectZonaComponent} from './ui-components/select-zona/select-zona.component';


import { MatSelectionList } from '@angular/material/list';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [AppDashboardComponent, 
    SaldoInventarioComponent,
    ListaPreciosExistenciaComponent,
    ComprobantesElectronicosComponent,
    ListadoFacturasEntregasPendientesComponent,

    TablasComponent,
    ListaLocalesComponent,
    ListaLineasComponent,
    SelectLocalesComponent,
    SelectZonaComponent,
    FiltroFechaComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    NgSelectModule,
    CalendarModule,
    NgApexchartsModule,
    RouterModule.forChild(PagesRoutes),
    TablerIconsModule.pick(TablerIcons),
  ],
  exports: [TablerIconsModule,TablasComponent,ListaLocalesComponent],
})
export class PagesModule {}
