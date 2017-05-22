import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent} from './reports/reports.component'
import { PageNotFoundComponent } from './page-not-found.component';
import {AnalyticsComponent } from './analytics/analytics.component'

 const routes: Routes = [
  { path: 'app-dashboard', component: DashboardComponent },
  { path: 'app-reports', component: ReportsComponent },
  { path: 'app-analytics', component: AnalyticsComponent },
  { path: '', redirectTo: '/app-dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}