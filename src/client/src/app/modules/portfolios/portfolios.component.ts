import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import * as PortfoliosActions from './store/portfolios.actions';
import { Portfolio } from './store/portfolios.model';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss']
})
export class PortfoliosComponent implements OnInit, OnDestroy {

  constructor(private store: Store<fromApp.AppState>) { }

  subscription: Subscription;

  columnDefs = [{
    field: 'name',
    flex: 1,
    editable: true,
    sortable: true,
    filter: true,
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    checkboxSelection: true,
    valueSetter: ({ newValue, data }) => {
      this.store.dispatch(new PortfoliosActions.UpdatePortfolio({
        index: data.id,
        updatedPortfolio: {
          ...data,
          name: newValue
        }
      }));
    }
  }]

  rowData: Observable<Portfolio[]>;
  private gridApi;
  private gridColumnApi;

  createPortfolio() {
    this.store.dispatch(new PortfoliosActions.AddPortfolio(new Portfolio(0, "New portfolio")));
  }

  removePortfolio() {
    const selectedRows = this.gridApi.getSelectedRows();
    for (const selectedRow of selectedRows) {
      this.store.dispatch(new PortfoliosActions.DeletePortfolio(selectedRow.id));
    }
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  ngOnInit() {
    this.rowData = this.store
      .select('portfolios')
      .pipe(map(portfoliosState => portfoliosState && portfoliosState.portfolios || []));

    this.store.dispatch(new PortfoliosActions.FetchPortfolios());
  }

  ngOnDestroy() {
  }
}
