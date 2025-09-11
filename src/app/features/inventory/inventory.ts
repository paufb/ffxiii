import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationMenu, type NavigationMenuItem } from '@/core/layout/navigation-menu/navigation-menu';
import { PartyHighlighter } from '@/shared/components/party-highlighter/party-highlighter';
import { TitleRuler } from '@/shared/components/title-ruler/title-ruler';

@Component({
  selector: 'app-inventory',
  imports: [NavigationMenu, PartyHighlighter, RouterOutlet, TitleRuler],
  templateUrl: './inventory.html',
  styleUrl: './inventory.scss'
})
export class Inventory {
  protected readonly navigationMenuItems: NavigationMenuItem[] = [
    { title: 'Items', url: '/inventory/items', headerText: 'View consumable items in the party inventory.' },
    { title: 'Weapons', url: '/inventory/weapons', headerText: 'View weapons in the party inventory.' },
    { title: 'Accessories', url: '/inventory/accessories', headerText: 'View accessories in the party inventory.' },
    { title: 'Components', url: '/inventory/components', headerText: 'View components in the party inventory.' },
    { title: 'Key Items', url: '/inventory/key-items', headerText: 'View key items in the party inventory.' }
  ];
}
