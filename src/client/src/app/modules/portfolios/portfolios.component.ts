import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fromApp from '../../store/app.reducer';
import { CreatedialogComponent } from './components/createdialog/createdialog.component';
import * as PortfoliosActions from './store/portfolios.actions';
import { Portfolio } from './store/portfolios.model';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss']
})
export class PortfoliosComponent implements OnInit {
  private gridApi;

  rowData: Observable<Portfolio[]>;
  columnDefs = this.getColumns();

  constructor(
    private store: Store<fromApp.AppState>,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.rowData = this.store
      .select('portfolios')
      .pipe(map(portfoliosState => portfoliosState && portfoliosState.portfolios || []));

    this.store.dispatch(new PortfoliosActions.FetchPortfolios());
  }

  getColumns(): Array<any> {
    return [{
      field: 'name',
      flex: 1,
      editable: true,
      sortable: true,
      filter: true,
      valueSetter: ({ newValue, data }) => this.updatePortfolio<string>(data, 'name', newValue)
    }];
  }

  onGridReady(params) {
    this.gridApi = params.api;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreatedialogComponent, { width: '300px', data: new Portfolio() });
    dialogRef.afterClosed().subscribe(x => {
      if (x != null) {
        const newPortfolio = new Portfolio(x.id, x.name);
        this.store.dispatch(new PortfoliosActions.AddPortfolio(newPortfolio));
      }
    });
  }

  updatePortfolio<T>(data: Portfolio, property: string, value: T) {
    const updated = { ...data, [property]: value };
    const updatedPortfolio = Object.assign(new Portfolio(), updated);
    this.store.dispatch(new PortfoliosActions.UpdatePortfolio({ index: data.id, updatedPortfolio }));
  }

  removePortfolio() {
    const selectedRows = this.gridApi.getSelectedRows();
    for (const selectedRow of selectedRows) {
      this.store.dispatch(new PortfoliosActions.DeletePortfolio(selectedRow.id));
    }
  }
}
