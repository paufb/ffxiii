import { Component, input } from '@angular/core';
import { OutlinedGradientText } from '@/shared/components/outlined-gradient-text/outlined-gradient-text';
import { type Character } from '@/shared/models/character';

@Component({
  selector: 'app-character-card',
  imports: [OutlinedGradientText],
  templateUrl: './character-card.html',
  styleUrl: './character-card.scss'
})
export class CharacterCard {
  readonly character = input.required<Character>();
}
