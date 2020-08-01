import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from 'src/app/widgets/dashboard-header/dashboard-header.component';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { DataAnalyticsUtils } from '../utils/data-analytics-utils';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { MorrisJsModule } from 'angular-morris-js';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { SunburstComponent } from './sunburst/sunburst.component';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import { PostsComponent } from './posts/posts.component';
import { ModalFailedComponent } from './modal-failed/modal-failed.component';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { TimeSeriesComponent } from './time-series/time-series.component';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
PlotlyModule.plotlyjs = PlotlyJS;
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: 'tags',
      component: WordCloudComponent
    }]
  }
]
@NgModule({
  declarations: [
    DashboardHeaderComponent,
    SummaryComponent,
    DonutChartComponent,
    AreaChartComponent,
    PieChartComponent,
    SunburstComponent,
    PostsComponent,
    ModalFailedComponent,
    WordCloudComponent,
    TimeSeriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MorrisJsModule,
    NgApexchartsModule,
    PlotlyModule,
    NgbModule
  ],
  exports: [
    DashboardHeaderComponent,
    SummaryComponent,
    DonutChartComponent,
    AreaChartComponent,
    PieChartComponent,
    SunburstComponent,
    PostsComponent,
    ModalFailedComponent,
    WordCloudComponent,
    TimeSeriesComponent,
    RouterModule
  ],
  providers: [DataAnalyticsUtils, NgbModalConfig, NgbModal, NgbActiveModal],
  entryComponents: [
    ModalFailedComponent
  ]
})
export class WidgetsModule { }
