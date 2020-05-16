import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from 'src/app/widgets/dashboard-header/dashboard-header.component';
import {RouterModule} from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { DataAnalyticsUtils } from '../utils/data-analytics-utils';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { MorrisJsModule } from 'angular-morris-js';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    MorrisJsModule,
    NgApexchartsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
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
