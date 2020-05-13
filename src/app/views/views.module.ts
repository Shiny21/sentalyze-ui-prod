import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/views/dashboard/dashboard.component';
import { SearchComponent } from 'src/app/views/search/search.component';
import { LandingPageComponent } from 'src/app/views/landing-page/landing-page.component';
import {WidgetsModule} from 'src/app/widgets/widgets.module';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent,
    SearchComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    WidgetsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,
    SearchComponent,
    LandingPageComponent
  ]
})
export class ViewsModule { }
