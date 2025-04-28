import { Routes } from '@angular/router';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { InventoryItemsComponent } from './pages/inventory-items/inventory-items.component';

export const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'inventory',
    component: InventoryComponent,
    children: [
      { path: '', redirectTo: 'items', pathMatch: 'full' },
      { path: 'items', component: InventoryItemsComponent }
    ]
  },
];
