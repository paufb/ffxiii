import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationMenuComponent } from '../../components/navigation-menu/navigation-menu.component';
import { PartyHighlighterComponent } from '../../components/party-highlighter/party-highlighter.component';
import { TitleRulerComponent } from '../../components/title-ruler/title-ruler.component';
import { NavigationMenuItem } from '../../models/navigation-menu-item.interface';

@Component({
  selector: 'app-inventory',
  imports: [NavigationMenuComponent, PartyHighlighterComponent, RouterOutlet, TitleRulerComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryComponent {
  protected readonly navigationMenuItems: NavigationMenuItem[] = [
    { title: 'Items', url: '/inventory/items', headerText: 'View consumable items in the party inventory.' },
    { title: 'Weapons', url: '/inventory/weapons', headerText: 'View weapons in the party inventory.' },
    { title: 'Accessories', url: '/inventory/accessories', headerText: 'View accessories in the party inventory.' },
    { title: 'Components', url: '/inventory/components', headerText: 'View components in the party inventory.' },
    { title: 'Key Items', url: '/inventory/key-items', headerText: 'View key items in the party inventory.' }
  ];
}
