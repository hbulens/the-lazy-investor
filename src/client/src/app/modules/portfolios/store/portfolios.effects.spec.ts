import { Observable } from 'rxjs';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { PortfoliosEffects } from './portfolios.effects';

describe('PortfoliosEffects', () => {
  let actions$: Observable<any>;
  let effects: PortfoliosEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PortfoliosEffects,
        provideMockActions(() => actions$),
        provideMockStore({})
      ]
    });

    effects = TestBed.get<PortfoliosEffects>(PortfoliosEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
