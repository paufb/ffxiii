import { Routes } from '@angular/router';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { InventoryAccessoriesComponent } from './pages/inventory-accessories/inventory-accessories.component';
import { InventoryItemsComponent } from './pages/inventory-items/inventory-items.component';
import { InventoryWeaponsComponent } from './pages/inventory-weapons/inventory-weapons.component';

export const routes: Routes = [
  { path: '', component: MainMenuComponent, data: { animation: 'MainMenuPage' } },
  { path: 'inventory',
    component: InventoryComponent,
    children: [
      { path: '', redirectTo: 'items', pathMatch: 'full' },
      { path: 'items', component: InventoryItemsComponent },
      { path: 'weapons', component: InventoryWeaponsComponent },
      { path: 'accessories', component: InventoryAccessoriesComponent }
    ],
    data: { animation: 'InventoryPage' }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
