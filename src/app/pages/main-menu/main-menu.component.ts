import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationMenuComponent } from '../../components/navigation-menu/navigation-menu.component';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';
import { characters } from '../../constants/characters';
import { NavigationMenuItem } from '../../models/navigation-menu-item.interface';

@Component({
  selector: 'app-main-menu',
  imports: [NavigationMenuComponent, CharacterCardComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent {
  protected readonly navigationMenuItems: NavigationMenuItem[] = [
    { title: 'Inventory', url: '/inventory', headerText: 'View party inventory.' },
    { title: 'Datalog', url: '/datalog', headerText: 'View log of accumulated data.' }
  ];
  protected readonly characters = Object.values(characters);
}
