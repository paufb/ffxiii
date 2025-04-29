import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class PartyHighlighterService {
  highlightedCharacterSubject = new BehaviorSubject<Character | null>(null);
  $highlightedCharacter = this.highlightedCharacterSubject.asObservable();

  setHighlightedCharacter(character: Character | null) {
    this.highlightedCharacterSubject.next(character);
  }
}
