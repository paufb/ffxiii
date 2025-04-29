import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HelpHeaderService } from '../../services/help-header.service';
import { CursorComponent } from '../cursor/cursor.component';

interface InventoryTableEntry {
  name: string;
  value: number | boolean;
  helpHeaderText: string;
}

@Component({
  selector: 'app-inventory-table',
  imports: [CursorComponent, NgIf],
  templateUrl: './inventory-table.component.html',
  styleUrl: './inventory-table.component.css'
})
export class InventoryTableComponent {
  @Input({ required: true }) columnTitle!: 'Quantity' | 'Equipped';
  @Input({ required: true }) entries!: InventoryTableEntry[];
  selectedEntry!: InventoryTableEntry;
  cursorX = 0;
  cursorY = 0;
  isCursorVisible = false;

  constructor(private helpHeaderService: HelpHeaderService) {}

  getPairs(arr: typeof this.entries) {
    const pairs = [];
    for (let i = 0; i < arr.length; i += 2) {
      pairs.push([arr[i], arr[i + 1]]);
    }
    return pairs;
  }

  setSelectedEntry(entry: InventoryTableEntry) {
    this.selectedEntry = entry;
    this.hideCursor();
  }

  setHelpHeaderText(text: string) {
    this.helpHeaderService.setText(text);
  }

  moveCursor(event: MouseEvent, xCellIndex: number, yCellIndex: number) {
    const tableCellElement = event.currentTarget as HTMLTableCellElement;
    if (tableCellElement.classList.contains('selected')) {
      this.hideCursor();
      return;
    }
    this.cursorX = xCellIndex * 512;
    this.cursorY = (yCellIndex + 1) * 36;
    this.isCursorVisible = true;
  }

  hideCursor() {
    this.isCursorVisible = false;
  }
}
