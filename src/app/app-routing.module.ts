import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SearchComponent } from './views/search/search.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { FeedbackComponent } from './views/feedback/feedback.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { WordCloudComponent } from './widgets/word-cloud/word-cloud.component';
import { ComingSoonComponent } from './views/coming-soon/coming-soon.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: 'landing',
    component: LandingPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: 'tags',
      component: WordCloudComponent
    }],
    canActivate: [AuthGuardService]
  },{
    path: 'reload',
    component: DashboardComponent,
    children: [{
      path: 'tags',
      component: WordCloudComponent
    }],
    canActivate: [AuthGuardService]
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuardService]
  },{
    path: 'feedback',
    component: FeedbackComponent,
    canActivate: [AuthGuardService]
  },{
    path: 'enterpriseAccess',
    component: ComingSoonComponent,
    canActivate: [AuthGuardService]
  },
  { path: '',   redirectTo: 'landing', pathMatch: 'full' }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
