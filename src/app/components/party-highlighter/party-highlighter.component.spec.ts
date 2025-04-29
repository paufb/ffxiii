import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyHighlighterComponent } from './party-highlighter.component';

describe('PartyHighlighterComponent', () => {
  let component: PartyHighlighterComponent;
  let fixture: ComponentFixture<PartyHighlighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartyHighlighterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyHighlighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
