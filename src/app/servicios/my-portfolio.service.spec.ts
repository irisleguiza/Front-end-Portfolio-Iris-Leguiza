import { TestBed } from '@angular/core/testing';

import { MyPortfolioService } from './my-portfolio.service';

describe('MyPortfolioService', () => {
  let service: MyPortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
