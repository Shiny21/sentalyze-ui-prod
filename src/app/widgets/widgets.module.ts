import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from 'src/app/widgets/dashboard-header/dashboard-header.component';
import {RouterModule} from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { DataAnalyticsUtils } from '../utils/data-analytics-utils';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { MorrisJsModule } from 'angular-morris-js';
import { AreaChartComponent } from './area-chart/area-chart.component';

@NgModule({
  declarations: [
    DashboardHeaderComponent,
    SummaryComponent,
    DonutChartComponent,
    AreaChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MorrisJsModule
  ],
  exports: [
    DashboardHeaderComponent,
    SummaryComponent,
    DonutChartComponent,
    AreaChartComponent
  ],
  providers: [DataAnalyticsUtils]
})
export class WidgetsModule { }
