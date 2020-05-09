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
import {HttpClientModule} from '@angular/common/http';
import {ApiEndpointGenerator} from 'src/app/utils/api-endpoint-generator';
import {Configs} from 'src/app/config/config';
import {Constants} from 'src/app/constants/constants';

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
    FormsModule,
    HttpClientModule
  ],
  providers: [SentimentsService, ApiEndpointGenerator, Configs, Constants]
})
export class DefaultModule { }
