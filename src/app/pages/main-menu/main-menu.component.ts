import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationMenuComponent } from '../../components/navigation-menu/navigation-menu.component';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';
import { characters } from '../../constants/characters';

@Component({
  selector: 'app-main-menu',
  imports: [NavigationMenuComponent, CharacterCardComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent {
  protected readonly navigationMenuItems = [
    { title: 'Inventory', url: '/inventory', helpHeaderText: 'View party inventory.' },
    { title: 'Datalog', url: '/datalog', helpHeaderText: 'View log of accumulated data.' }
  ];
  protected readonly characters = Object.values(characters);
}
