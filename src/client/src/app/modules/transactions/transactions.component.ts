import * as moment from 'moment/moment';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import { CreatedialogComponent } from './components/createdialog/createdialog.component';
import * as TransactionsActions from './store/transactions.actions';
import { Transaction } from './store/transactions.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  private gridApi;

  rowData: Observable<Transaction[]>;
  columnDefs = this.getColumns();

  constructor(private store: Store<fromApp.AppState>, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.rowData = this.store
      .select('transactions')
      .pipe(map(transactionsState => transactionsState && transactionsState.transactions || []));

    this.store.dispatch(new TransactionsActions.FetchTransactions());
  }

  getColumns(): Array<any> {
    return [
      {
        field: 'portfolioId',
        headerName: 'Portfolio',
        flex: 1,
        editable: false,
        sortable: true,
        filter: true,
        valueSetter: ({ newValue, data }) => this.updateTransaction<number>(data, 'portfolioId', parseInt(newValue)),
        cellRenderer(params) {
          return '<b>' + params.data?.portfolio?.name + '</b>';
        }
      },
      {
        field: 'ticker',
        flex: 1,
        editable: true,
        sortable: true,
        filter: true,
        valueSetter: ({ newValue, data }) => this.updateTransaction<Date>(data, 'ticker', newValue)
      }, {
        field: 'date',
        // cellEditor: 'datepicker',
        flex: 1,
        editable: true,
        sortable: true,
        filter: true,
        sort: 'desc',
        valueSetter: ({ newValue, data }) => this.updateTransaction<string>(data, 'date', newValue),
        cellRenderer: (data) => {
          return moment(data.value).format('YYYY/MM/DD HH:mm');
        }
      }, {
        field: 'price',
        flex: 1,
        editable: true,
        sortable: true,
        filter: true,
        valueSetter: ({ newValue, data }) => this.updateTransaction<number>(data, 'price', parseInt(newValue))
      }, {
        field: 'amount',
        flex: 1,
        editable: true,
        sortable: true,
        filter: true,
        valueSetter: ({ newValue, data }) => this.updateTransaction<number>(data, 'amount', parseInt(newValue))
      }];
  }

  onGridReady(params): void {
    this.gridApi = params.api;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreatedialogComponent, { width: '300px', data: new Transaction() });
    dialogRef.afterClosed().subscribe(x => {
      if (x != null) {
        const newTransaction = new Transaction(
          x.id,
          x.ticker,
          new Date(x.date),
          parseInt(x.amount),
          parseInt(x.price),
          parseInt(x.portfolioId)
        );

        this.store.dispatch(new TransactionsActions.AddTransaction(newTransaction));
      }
    });
  }

  updateTransaction<T>(data: Transaction, property: string, value: T) {
    const updated = { ...data, [property]: value };
    const updatedTransaction = Object.assign(new Transaction(), updated);
    this.store.dispatch(new TransactionsActions.UpdateTransaction({ index: data.id, updatedTransaction }));
  }

  removeTransaction() {
    const selectedRows = this.gridApi.getSelectedRows();
    for (const selectedRow of selectedRows) {
      this.store.dispatch(new TransactionsActions.DeleteTransaction(selectedRow.id));
    }
  }
}
