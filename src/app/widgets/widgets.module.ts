import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from 'src/app/widgets/dashboard-header/dashboard-header.component';
import {RouterModule} from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { DataAnalyticsUtils } from '../utils/data-analytics-utils';

@NgModule({
  declarations: [
    DashboardHeaderComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DashboardHeaderComponent,
    SummaryComponent
  ],
  providers: [DataAnalyticsUtils]
})
export class WidgetsModule { }
