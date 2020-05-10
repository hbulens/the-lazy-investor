import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { CreatedialogComponent } from './createdialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CreatedialogComponent', () => {
  let component: CreatedialogComponent;
  let fixture: ComponentFixture<CreatedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatedialogComponent],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialog, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
