import { Injectable, signal } from '@angular/core';
import { type Character } from '@/shared/models/character';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  readonly headerText = signal<string | null>(null);
  readonly highlightedCharacter = signal<Character | null>(null);
}
