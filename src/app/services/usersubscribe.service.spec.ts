import { TestBed } from '@angular/core/testing';

import { UsersubscribeService } from './usersubscribe.service';

describe('UsersubscribeService', () => {
  let service: UsersubscribeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersubscribeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
