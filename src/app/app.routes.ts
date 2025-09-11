import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('@/features/home/home').then(m => m.Home) },
  {
    path: 'inventory',
    loadComponent: () => import('@/features/inventory/inventory').then(m => m.Inventory),
    children: [
      { path: '', redirectTo: 'items', pathMatch: 'full' },
      { path: 'items', loadComponent: () => import('@/features/inventory/items/items').then(m => m.Items) },
      { path: 'weapons', loadComponent: () => import('@/features/inventory/weapons/weapons').then(m => m.Weapons) },
      { path: 'accessories', loadComponent: () => import('@/features/inventory/accessories/accessories').then(m => m.Accessories) }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
