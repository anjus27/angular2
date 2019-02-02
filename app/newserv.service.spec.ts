import { TestBed } from '@angular/core/testing';

import { NewservService } from './newserv.service';

describe('NewservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewservService = TestBed.get(NewservService);
    expect(service).toBeTruthy();
  });
});
