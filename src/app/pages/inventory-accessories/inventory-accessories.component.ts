import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InventoryTableComponent } from '../../components/inventory-table/inventory-table.component';
import { TitleRulerComponent } from '../../components/title-ruler/title-ruler.component';
import { accessories } from '../../constants/accessories';

@Component({
  selector: 'app-inventory-accessories',
  imports: [TitleRulerComponent, InventoryTableComponent],
  templateUrl: './inventory-accessories.component.html',
  styleUrl: './inventory-accessories.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryAccessoriesComponent {
  protected readonly inventoryTableEntries = Object.values(accessories);
}
