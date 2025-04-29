import { TestBed } from '@angular/core/testing';

import { PartyHighlighterService } from './party-highlighter.service';

describe('PartyHighlighterService', () => {
  let service: PartyHighlighterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartyHighlighterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
