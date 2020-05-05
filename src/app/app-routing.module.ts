import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SearchComponent } from './modules/search/search.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: LandingPageComponent
  },{
    path: 'dashboard',
    component: DashboardComponent
  },{
    path: 'search',
    component: SearchComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
