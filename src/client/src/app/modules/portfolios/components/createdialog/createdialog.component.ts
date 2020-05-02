import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { PortfoliosService } from 'src/app/modules/portfolios/portfolios.service';
import { Portfolio } from 'src/app/modules/portfolios/store/portfolios.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-createdialog',
  templateUrl: './createdialog.component.html',
  styleUrls: ['./createdialog.component.scss']
})
export class CreatedialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CreatedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Portfolio) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSubmitClick(): void {
    this.dialogRef.close();
  }
}
