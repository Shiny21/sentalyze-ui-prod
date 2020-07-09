import { TestBed } from '@angular/core/testing';

import { TrendingTopicsService } from './trending-topics.service';

describe('TrendingTopicsService', () => {
  let service: TrendingTopicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingTopicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
