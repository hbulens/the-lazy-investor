import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import * as PortfoliosActions from './store/portfolios.actions';
import { Portfolio } from './store/portfolios.model';
import { PortfoliosDataSource } from './portfolios-datasource';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss']
})
export class PortfoliosComponent implements AfterViewInit, OnInit, OnDestroy {

  constructor(private store: Store<fromApp.AppState>) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Portfolio>;
  dataSource: PortfoliosDataSource;

  subscription: Subscription;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {

    this.subscription = this.store
      .select('portfolios')
      .pipe(map(portfoliosState => portfoliosState && portfoliosState.portfolios || []))
      .subscribe((portfolios: Portfolio[]) => {
        this.dataSource = new PortfoliosDataSource(portfolios, this.paginator, this.sort);
        if (this.dataSource && this.table) {
          this.table.dataSource = this.dataSource;
        }
      });

    this.store.dispatch(new PortfoliosActions.FetchPortfolios());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
