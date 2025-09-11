import { Component } from '@angular/core';
import { InventoryTable } from '@/shared/components/inventory-table/inventory-table';
import { TitleRuler } from '@/shared/components/title-ruler/title-ruler';
import { accessories } from '@/shared/constants/accessories';

@Component({
  selector: 'app-accessories',
  imports: [InventoryTable, TitleRuler],
  templateUrl: './accessories.html',
  styleUrl: './accessories.scss'
})
export class Accessories {
  protected readonly accessories = Object.values(accessories);
}
