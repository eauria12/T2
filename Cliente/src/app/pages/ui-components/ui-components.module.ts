import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { UiComponentsRoutes } from './ui-components.routing';

// ui components
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { MatNativeDateModule } from '@angular/material/core';
//import { TablaKardexComponent } from '../../tabla-kardex/tabla-kardex.component';
//import { NivelComponent } from '../../nivel/nivel.component';
//import { ZonaComponent } from '../../zona/zona.component';
//import { CodigoArticuloComponent } from '../../codigo-articulo/codigo-articulo.component';
//import { TipoInventarioComponent } from '../../tipo-inventario/tipo-inventario.component';
//import { FechaInventarioComponent } from '../../fecha-inventario/fecha-inventario.component';
//import { ConsolidadoComponent } from '../../consolidado/consolidado.component';
//import { EmisionEstablComponent } from '../../emision-establ/emision-establ.component';
//import { FiltroFechaComponent } from '../../filtro-fecha/filtro-fecha.component';
//import { SelectZonaComponent } from '../../select-zona/select-zona.component';
//import { SelectLocalesComponent } from '../../select-locales/select-locales.component';
//import { ListaLineasComponent } from './lists/lista-lineas/lista-lineas.component';
//import { ListaLocalesComponent } from './lists/lista-locales/lista-locales.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UiComponentsRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
  ],
  declarations: [
    AppBadgeComponent,
    AppChipsComponent,
    AppListsComponent,
    AppMenuComponent,
    AppTooltipsComponent,
    //TablaKardexComponent,
    //NivelComponent,
    //ZonaComponent,
    //CodigoArticuloComponent,
    //TipoInventarioComponent,
    //FechaInventarioComponent,
    //ConsolidadoComponent,
    //EmisionEstablComponent,
    //FiltroFechaComponent,
    //SelectZonaComponent,
    //SelectLocalesComponent,
    //ListaLineasComponent,
    //ListaLocalesComponent,
    
  ],
  
})
export class UicomponentsModule {}
