import { booleanAttribute, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type Character = 'Lightning' | 'Vanille' | 'Fang' | 'Snow' | 'Sazh' | 'Hope';
type Role = 'Commando' | 'Ravager' | 'Sentinel' | 'Saboteur' | 'Synergist' | 'Medic';

@Component({
  selector: 'app-character-card',
  imports: [CommonModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {
  @Input({ required: true }) character!: Character;
  @Input({ transform: booleanAttribute }) active: boolean = false;
  @Input({ transform: booleanAttribute }) leader: boolean = false;
  healthPoints: number = this.getRandomNumber(2500, 3500);

  getImgSrc(character: Character) {
    return `/assets/characters/${character}.png`;
  }

  getRoleColor(role: Role) {
    const roleColors: Record<Role, string> = {
      'Commando': 'red',
      'Ravager': '#8591c2',
      'Sentinel': 'yellow',
      'Saboteur': 'gray',
      'Synergist': 'purple',
      'Medic': '#ccffcc'
    };
    return roleColors[role];
  }

  getCharacterRole(character: Character) {
    const characterRoles: Record<Character, Role> = {
      'Lightning': 'Commando',
      'Vanille': 'Medic',
      'Fang': 'Ravager',
      'Snow': 'Sentinel',
      'Sazh': 'Synergist',
      'Hope': 'Saboteur'
    };
    return characterRoles[character];
  }

  getCharacterRoleColor(character: Character) {
    return this.getRoleColor(this.getCharacterRole(character));
  }

  getRandomNumber(lowerBound: number, upperBound: number) {
    return Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
  }
}
