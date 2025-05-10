import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { characters } from '../../constants/characters';
import { PartyHighlighterService } from '../../services/party-highlighter.service';

@Component({
  selector: 'app-party-highlighter',
  imports: [NgOptimizedImage],
  templateUrl: './party-highlighter.component.html',
  styleUrl: './party-highlighter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartyHighlighterComponent {
  private readonly partyHighlighterService = inject(PartyHighlighterService);
  protected readonly highlightedCharacter = this.partyHighlighterService.highlightedCharacter;
  protected readonly characters = Object.values(characters);
}
