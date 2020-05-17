import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import {SentimentsService} from 'src/app/services/sentiments.service'
import {HttpClientModule} from '@angular/common/http';
import {ApiEndpointGenerator} from 'src/app/utils/api-endpoint-generator';
import {Configs} from 'src/app/config/config';
import {Constants} from 'src/app/constants/constants';
import {ViewsModule} from 'src/app/views/views.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../../../environments/environment';
import { UserSubscribeComponent } from '../../modules/user-subscribe/user-subscribe.component';
import {UsersubscribeService} from 'src/app/services/usersubscribe.service'

@NgModule({
  declarations: [
    DefaultComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ViewsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [SentimentsService,UsersubscribeService, ApiEndpointGenerator, Configs, Constants]
})
export class DefaultModule { }
