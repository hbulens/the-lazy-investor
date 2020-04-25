import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavbarComponent } from './core/header/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { PortfoliosModule } from './modules/portfolios/portfolios.module';
import { AngularMaterialModule } from './core/angular-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardModule } from './modules/dashboard/dashboard.module';

import * as fromApp from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    BrowserAnimationsModule,
    AngularMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    DashboardModule,
    TransactionsModule,
    PortfoliosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
