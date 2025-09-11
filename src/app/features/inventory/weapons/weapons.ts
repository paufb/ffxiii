import { Component } from '@angular/core';
import { InventoryTable } from '@/shared/components/inventory-table/inventory-table';
import { TitleRuler } from '@/shared/components/title-ruler/title-ruler';
import { weapons } from '@/shared/constants/weapons';

@Component({
  selector: 'app-weapons',
  imports: [InventoryTable, TitleRuler],
  templateUrl: './weapons.html',
  styleUrl: './weapons.scss'
})
export class Weapons {
  protected readonly weapons = Object.values(weapons);
}
