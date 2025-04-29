import { Component } from '@angular/core';
import { InventoryTableComponent } from '../../components/inventory-table/inventory-table.component';
import { TitleRulerComponent } from '../../components/title-ruler/title-ruler.component';
import { weapons } from '../../constants/weapons';

@Component({
  selector: 'app-inventory-weapons',
  imports: [InventoryTableComponent, TitleRulerComponent],
  templateUrl: './inventory-weapons.component.html',
  styleUrl: './inventory-weapons.component.css'
})
export class InventoryWeaponsComponent {
  inventoryTableEntries = Object.values(weapons);
}
