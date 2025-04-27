import { Component } from '@angular/core';
import { NavigationMenuComponent } from "../../components/navigation-menu/navigation-menu.component";

@Component({
  selector: 'app-inventory',
  imports: [NavigationMenuComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  title = 'Inventory';
  navigationMenuItems = [
    {
      title: 'Items',
      url: '/inventory/items',
      helpHeaderText: 'View consumable items in the party inventory.'
    },
    {
      title: 'Weapons',
      url: '/inventory/weapons',
      helpHeaderText: 'View weapons in the party inventory.'
    },
    {
      title: 'Accessories',
      url: '/inventory/accessories',
      helpHeaderText: 'View accessories in the party inventory.'
    },
    {
      title: 'Components',
      url: '/inventory/components',
      helpHeaderText: 'View components in the party inventory.'
    },
    {
      title: 'Key Items',
      url: '/inventory/key-items',
      helpHeaderText: 'View key items in the party inventory.'
    },
  ];
}
