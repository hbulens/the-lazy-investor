import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { LinechartComponent } from './components/timeline/linechart.component';
import { StatsComponent } from './components/top-instruments/stats.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AreaComponent } from './components/performance/area.component';
import { PiechartComponent } from './components/distribution/piechart.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LinechartComponent,
    StatsComponent,
    AreaComponent,
    PiechartComponent
  ],
  exports: [
    DashboardComponent,
    LinechartComponent,
    StatsComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgxChartsModule
  ]
})
export class DashboardModule { }
