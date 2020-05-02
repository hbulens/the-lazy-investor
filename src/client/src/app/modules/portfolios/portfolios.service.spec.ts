import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PortfoliosService } from './portfolios.service';

describe('PortfoliosService', () => {
  let service: PortfoliosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PortfoliosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
