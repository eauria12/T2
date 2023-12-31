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
import { KardexMercaderiaComponent } from './kardex-mercaderia/kardex-mercaderia.component';

//Se importan los componentes
import { TablasComponent} from './ui-components/tablas/tablas.component';
import { ListaLocalesComponent } from './ui-components/lists/lista-locales/lista-locales.component';
import { ListaLineasComponent } from './ui-components/lists/lista-lineas/lista-lineas.component';
import { SelectLocalesComponent} from './ui-components/select-locales/select-locales.component';
import { FiltroFechaComponent } from './ui-components/filtro-fecha/filtro-fecha.component';
import { SelectZonaComponent} from './ui-components/select-zona/select-zona.component';
import { EmisionEstablComponent } from './ui-components/emision-establ/emision-establ.component';
import { SelectLineasComponent } from './ui-components/select-lineas/select-lineas.component';
import { FechaInventarioComponent } from './ui-components/fecha-inventario/fecha-inventario.component';
import { TipoInventarioComponent } from './ui-components/tipo-inventario/tipo-inventario.component';
import { CodigoArticuloComponent } from './ui-components/codigo-articulo/codigo-articulo.component';
import { NivelComponent } from './ui-components/nivel/nivel.component';
import { ZonaComponent } from './ui-components/zona/zona.component';
import { TablaKardexComponent } from './ui-components/tabla-kardex/tabla-kardex.component';

import { MatSelectionList } from '@angular/material/list';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect'; // Importa el módulo MultiSelectModule de PrimeNG
import { DropdownModule } from 'primeng/dropdown'; // Importa el módulo DropdownModule de PrimeNG
import { TagModule } from 'primeng/tag'; // Importa el módulo TagModule de PrimeNG
import { InputTextModule } from 'primeng/inputtext'; //Importa el modulo InputTextModule de PrimeNG
import { CheckboxModule } from 'primeng/checkbox';
import { ScrollerModule } from 'primeng/scroller';
import { InputNumberModule } from 'primeng/inputnumber';



@NgModule({
  declarations: [
    AppDashboardComponent, 
    SaldoInventarioComponent,
    ListaPreciosExistenciaComponent,
    ComprobantesElectronicosComponent,
    ListadoFacturasEntregasPendientesComponent,
    KardexMercaderiaComponent,

    TablasComponent,
    ListaLocalesComponent,
    ListaLineasComponent,
    SelectLocalesComponent,
    SelectZonaComponent,
    FiltroFechaComponent,
    EmisionEstablComponent,
    SelectLineasComponent,
    FechaInventarioComponent,
    TipoInventarioComponent,
    CodigoArticuloComponent,
    NivelComponent,
    ZonaComponent,
    TablaKardexComponent,
  
  ],
  imports: [
    InputNumberModule,
    ScrollerModule,
    CheckboxModule,
    InputTextModule,
    TagModule,
    DropdownModule,
    MultiSelectModule ,
    TableModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    NgSelectModule,
    CalendarModule,
    RadioButtonModule,
    NgApexchartsModule,
    RouterModule.forChild(PagesRoutes),
    TablerIconsModule.pick(TablerIcons),
  ],
  exports: [TablerIconsModule,TablasComponent,ListaLocalesComponent],
})
export class PagesModule {}
