import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Transaction } from '../../store/transactions.model';
import { TransactionsService } from '../../transactions.service';
import { PortfoliosService } from 'src/app/modules/portfolios/portfolios.service';
import { Portfolio } from 'src/app/modules/portfolios/store/portfolios.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-createdialog',
  templateUrl: './createdialog.component.html',
  styleUrls: ['./createdialog.component.scss']
})
export class CreatedialogComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<CreatedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Transaction,
    private portfolioService: PortfoliosService) { }


  portfolios: Array<Portfolio>;

  ngOnInit(): void {
    this.subscription = this.portfolioService.fetch().subscribe(x => this.portfolios = x);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSubmitClick(): void {
    this.dialogRef.close();
  }
}
