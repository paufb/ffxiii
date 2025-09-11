import { Component } from '@angular/core';
import { NavigationMenu, type NavigationMenuItem } from '@/core/layout/navigation-menu/navigation-menu';
import { CharacterCard } from '@/shared/components/character-card/character-card';
import { characters } from '@/shared/constants/characters';

@Component({
  selector: 'app-home',
  imports: [CharacterCard, NavigationMenu],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected readonly navigationMenuItems: NavigationMenuItem[] = [
    { title: 'Inventory', url: '/inventory', headerText: 'View party inventory.' },
    { title: 'Datalog', url: '/datalog', headerText: 'View log of accumulated data.' }
  ];
  protected readonly characters = Object.values(characters);
}
