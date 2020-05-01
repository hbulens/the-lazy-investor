import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import * as TransactionsActions from './store/transactions.actions';
import { Transaction } from './store/transactions.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnDestroy {

  constructor(private store: Store<fromApp.AppState>) { }

  subscription: Subscription;

  columnDefs = [{
    field: 'portfolioid',
    flex: 1,
    editable: true,
    sortable: true,
    filter: true,
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    checkboxSelection: true,
    valueSetter: ({ newValue, data }) => {
      this.store.dispatch(new TransactionsActions.UpdateTransaction({
        index: data.id,
        updatedTransaction: {
          ...data,
          portfolioId: parseInt(newValue)
        }
      }));
    },
    cellRenderer(params) {
      return '<b>' + params.data?.portfolio?.name + '</b>';
    }
  }, {
    field: 'ticker',
    flex: 1,
    editable: true,
    sortable: true,
    filter: true,
    valueSetter: ({ newValue, data }) => {
      this.store.dispatch(new TransactionsActions.UpdateTransaction({
        index: data.id,
        updatedTransaction: {
          ...data,
          ticker: newValue
        }
      }));
    }
  }, {
    field: 'date',
    flex: 1,
    editable: true,
    sortable: true,
    filter: true,
    valueSetter: ({ newValue, data }) => {
      this.store.dispatch(new TransactionsActions.UpdateTransaction({
        index: data.id,
        updatedTransaction: {
          ...data,
          date: newValue
        }
      }));
    }
  }, {
    field: 'price',
    flex: 1,
    editable: true,
    sortable: true,
    filter: true,
    valueSetter: ({ newValue, data }) => {
      this.store.dispatch(new TransactionsActions.UpdateTransaction({
        index: data.id,
        updatedTransaction: {
          ...data,
          price: parseInt(newValue)
        }
      }));
    }
  }, {
    field: 'amount',
    flex: 1,
    editable: true,
    sortable: true,
    filter: true,
    valueSetter: ({ newValue, data }) => {
      this.store.dispatch(new TransactionsActions.UpdateTransaction({
        index: data.id,
        updatedTransaction: {
          ...data,
          amount: parseInt(newValue)
        }
      }));
    }
  }]

  rowData: Observable<Transaction[]>;
  private gridApi;
  private gridColumnApi;

  createTransaction() {
    this.store.dispatch(new TransactionsActions.AddTransaction(new Transaction(0, 'New transaction', new Date(), 0, 0)));
  }

  removeTransaction() {
    const selectedRows = this.gridApi.getSelectedRows();
    for (const selectedRow of selectedRows) {
      this.store.dispatch(new TransactionsActions.DeleteTransaction(selectedRow.id));
    }
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  ngOnInit() {
    this.rowData = this.store
      .select('transactions')
      .pipe(map(transactionsState => transactionsState && transactionsState.transactions || []));

    this.store.dispatch(new TransactionsActions.FetchTransactions());
  }

  ngOnDestroy() {
  }
}
