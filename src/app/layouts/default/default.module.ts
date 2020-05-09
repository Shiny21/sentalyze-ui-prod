import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from 'src/app/modules/search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingPageComponent } from 'src/app/modules/landing-page/landing-page.component';
import {FormsModule} from '@angular/forms';
import {SentimentsService} from 'src/app/services/sentiments.service'


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    SearchComponent,
    LandingPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule
  ],
  providers: [SentimentsService]
})
export class DefaultModule { }