import { TestBed } from '@angular/core/testing';

import { HelpHeaderService } from './help-header.service';

describe('HelpHeaderService', () => {
  let service: HelpHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
