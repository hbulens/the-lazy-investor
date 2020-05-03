import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { TransactionsComponent } from './modules/transactions/transactions.component';
import { PortfoliosComponent } from './modules/portfolios/portfolios.component';
import { LoginComponent } from './layout/login/login.component';
import { AuthGuardService } from './core/authguard.service';
import { NavbarComponent } from './layout/header/navbar.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: NavbarComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
      { path: 'portfolios', component: PortfoliosComponent, canActivate: [AuthGuardService] },
      { path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuardService] },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
