import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Character } from '../../models/character.model';
import { characters } from '../../constants/characters';

@Component({
  selector: 'app-party-highlighter',
  imports: [NgClass, NgOptimizedImage],
  templateUrl: './party-highlighter.component.html',
  styleUrl: './party-highlighter.component.css'
})
export class PartyHighlighterComponent {
  @Input() highlightedCharacter: Character | null = null;
  characters = Object.values(characters);
}
