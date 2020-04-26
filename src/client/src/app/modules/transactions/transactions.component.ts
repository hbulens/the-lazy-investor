import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import * as TransactionsActions from './store/transactions.actions';
import { Transaction } from './store/transactions.model';
import { TransactionsDataSource } from './transactions-datasource';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements AfterViewInit, OnInit, OnDestroy {

  constructor(private store: Store<fromApp.AppState>) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Transaction>;
  dataSource: TransactionsDataSource;

  subscription: Subscription;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'date', 'price', 'amount'];

  ngOnInit() {

    this.subscription = this.store
      .select('transactions')
      .pipe(map(transactionsState => transactionsState && transactionsState.transactions || []))
      .subscribe((transactions: Transaction[]) => {
        this.dataSource = new TransactionsDataSource(transactions, this.paginator, this.sort);
        if (this.dataSource && this.table) {
          this.table.dataSource = this.dataSource;
        }
      });

    this.store.dispatch(new TransactionsActions.FetchTransactions());
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
