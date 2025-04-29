import { NgIf } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';
import { CursorComponent } from '../cursor/cursor.component';
import { Item } from '../../models/item.model';
import { Weapon } from '../../models/weapon.model';
import { IsInstanceOfPipe } from '../../pipes/is-instance-of.pipe';
import { HelpHeaderService } from '../../services/help-header.service';
import { PartyHighlighterService } from '../../services/party-highlighter.service';

@Component({
  selector: 'app-inventory-table',
  imports: [CursorComponent, IsInstanceOfPipe, NgIf],
  templateUrl: './inventory-table.component.html',
  styleUrl: './inventory-table.component.css'
})
export class InventoryTableComponent implements OnDestroy {
  @Input({ required: true }) columnTitle!: 'Quantity' | 'Equipped';
  @Input({ required: true }) entries!: (Item | Weapon)[];
  Item = Item;
  Weapon = Weapon;
  selectedEntry!: typeof this.entries[number];
  cursorX = 0;
  cursorY = 0;
  isCursorVisible = false;

  constructor(private helpHeaderService: HelpHeaderService, private partyHighlighterService: PartyHighlighterService) {}

  ngOnDestroy() {
    this.partyHighlighterService.setHighlightedCharacter(null);
  }

  getEntryPairs() {
    const pairs = [];
    for (let i = 0; i < this.entries.length; i += 2) {
      pairs.push([this.entries[i], this.entries[i + 1]]);
    }
    return pairs;
  }

  setSelectedEntry(entry: typeof this.entries[number]) {
    this.selectedEntry = entry;
    this.hideCursor();
    this.setHelpHeaderText(entry);
    if (entry instanceof Weapon)
      this.partyHighlighterService.setHighlightedCharacter(entry.character);
  }

  private setHelpHeaderText(entry: typeof this.entries[number]) {
    let text = null;
    if (entry instanceof Item) {
      text = entry.effect;
    } else if (entry instanceof Weapon) {
      text = entry.description;
    }
    this.helpHeaderService.setText(text);
  }

  entryAs<T>(entry: typeof this.entries[number], target: new (...args: any[]) => T) {
    return entry as T;
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
