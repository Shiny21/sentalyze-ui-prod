import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SearchComponent } from './views/search/search.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';


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
