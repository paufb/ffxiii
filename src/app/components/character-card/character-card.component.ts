import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../models/character.model';
import { OutlinedGradientTextComponent } from '../outlined-gradient-text/outlined-gradient-text.component';

@Component({
  selector: 'app-character-card',
  imports: [CommonModule, OutlinedGradientTextComponent],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {
  @Input({ required: true }) character!: Character;

  getImgSrc(character: Character) {
    return `/assets/characters/${character.name}.png`;
  }
}
