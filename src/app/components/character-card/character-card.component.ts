import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Character } from '../../models/character.model';
import { OutlinedGradientTextComponent } from '../outlined-gradient-text/outlined-gradient-text.component';

@Component({
  selector: 'app-character-card',
  imports: [CommonModule, NgOptimizedImage, OutlinedGradientTextComponent],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {
  @Input({ required: true }) character!: Character;
}
