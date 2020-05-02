import { Observable } from 'rxjs';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TransactionsEffects } from './transactions.effects';

describe('TransactionsEffects', () => {
  let actions$: Observable<any>;
  let effects: TransactionsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TransactionsEffects,
        provideMockActions(() => actions$),
        provideMockStore({})
      ]
    });

    effects = TestBed.get<TransactionsEffects>(TransactionsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
