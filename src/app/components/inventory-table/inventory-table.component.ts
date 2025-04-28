import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HelpHeaderService } from '../../services/help-header.service';

@Component({
  selector: 'app-inventory-table',
  imports: [CommonModule],
  templateUrl: './inventory-table.component.html',
  styleUrl: './inventory-table.component.css'
})
export class InventoryTableComponent {
  @Input({ required: true }) columnTitle!: 'Quantity' | 'Equipped';
  @Input({ required: true }) entries!: {
    name: string;
    value: number | boolean;
    helpHeaderText: string;
  }[];

  constructor(private helpHeaderService: HelpHeaderService) {}

  getPairs(arr: typeof this.entries) {
    const pairs = [];
    for (let i = 0; i < arr.length; i += 2) {
      pairs.push([arr[i], arr[i + 1]]);
    }
    return pairs;
  }

  setHelpHeaderText(text: string) {
    this.helpHeaderService.setText(text);
  }
}
