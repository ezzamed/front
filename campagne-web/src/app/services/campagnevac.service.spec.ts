import { TestBed } from '@angular/core/testing';

import { CampagnevacService } from './campagnevac.service';

describe('CampagnevacService', () => {
  let service: CampagnevacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampagnevacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
