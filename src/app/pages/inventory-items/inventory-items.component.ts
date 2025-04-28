import { Component } from '@angular/core';
import { TitleRulerComponent } from '../../components/title-ruler/title-ruler.component';
import { InventoryTableComponent } from '../../components/inventory-table/inventory-table.component';
import { items } from '../../constants/items';

@Component({
  selector: 'app-inventory-items',
  imports: [TitleRulerComponent, InventoryTableComponent],
  templateUrl: './inventory-items.component.html',
  styleUrl: './inventory-items.component.css'
})
export class InventoryItemsComponent {
  inventoryTableEntries = Object.values(items).map((item) => ({
    name: item.name,
    value: item.quantity,
    helpHeaderText: item.effect
  }));
}
