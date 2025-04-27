import { Routes } from '@angular/router';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { InventoryComponent } from './pages/inventory/inventory.component';

export const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'inventory', component: InventoryComponent }
];
