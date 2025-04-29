import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { characters } from '../../constants/characters';
import { Character } from '../../models/character.model';
import { PartyHighlighterService } from '../../services/party-highlighter.service';

@Component({
  selector: 'app-party-highlighter',
  imports: [NgClass, NgOptimizedImage],
  templateUrl: './party-highlighter.component.html',
  styleUrl: './party-highlighter.component.css'
})
export class PartyHighlighterComponent {
  characters = Object.values(characters);
  highlightedCharacter!: Character | null;
  
  constructor(private partyHighlighterService: PartyHighlighterService) {
    this.partyHighlighterService.$highlightedCharacter.subscribe((character) => this.highlightedCharacter = character);
  }
}
