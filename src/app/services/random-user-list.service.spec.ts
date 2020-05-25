import { TestBed } from '@angular/core/testing';

import { RandomUserListService } from './random-user-list.service';

describe('RandomUserListService', () => {
  let service: RandomUserListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomUserListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
