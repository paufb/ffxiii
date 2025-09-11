import { Component } from '@angular/core';
import { InventoryTable } from '@/shared/components/inventory-table/inventory-table';
import { TitleRuler } from '@/shared/components/title-ruler/title-ruler';
import { items } from '@/shared/constants/items';

@Component({
  selector: 'app-items',
  imports: [InventoryTable, TitleRuler],
  templateUrl: './items.html',
  styleUrl: './items.scss'
})
export class Items {
  protected readonly items = Object.values(items);
}
