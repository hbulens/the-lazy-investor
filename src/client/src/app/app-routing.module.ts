import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { TransactionsComponent } from './modules/transactions/transactions.component';
import { PortfoliosComponent } from './modules/portfolios/portfolios.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'portfolios', component: PortfoliosComponent },
  { path: 'transactions', component: TransactionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
