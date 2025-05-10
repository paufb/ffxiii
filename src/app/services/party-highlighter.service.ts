import { Injectable, signal } from '@angular/core';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class PartyHighlighterService {
  private readonly _highlightedCharacter = signal<Character | null>(null);
  readonly highlightedCharacter = this._highlightedCharacter.asReadonly();

  setHighlightedCharacter(character: Character | null) {
    this._highlightedCharacter.set(character);
  }
}
