import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { PortfoliosComponent } from './portfolios.component';

describe('PortfoliosComponent', () => {
  let component: PortfoliosComponent;
  let fixture: ComponentFixture<PortfoliosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PortfoliosComponent],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        HttpClientTestingModule
      ],
      providers: [HttpClient, provideMockStore({})]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
