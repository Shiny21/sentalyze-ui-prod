import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/views/dashboard/dashboard.component';
import { SearchComponent } from 'src/app/views/search/search.component';
import { LandingPageComponent } from 'src/app/views/landing-page/landing-page.component';
import {WidgetsModule} from 'src/app/widgets/widgets.module';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedbackComponent } from 'src/app/views/feedback/feedback.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SearchComponent,
    LandingPageComponent,
    FeedbackComponent,
    ComingSoonComponent
  ],
  imports: [
    CommonModule,
    WidgetsModule,
    FormsModule,
    RouterModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: [
    DashboardComponent,
    SearchComponent,
    LandingPageComponent,
    FeedbackComponent
  ]
})
export class ViewsModule { }
