import { ChangeDetectionStrategy, Component, computed, inject, input, OnDestroy, signal } from '@angular/core';
import { CursorComponent } from '../cursor/cursor.component';
import { Accessory } from '../../models/accessory.model';
import { Item } from '../../models/item.model';
import { Weapon } from '../../models/weapon.model';
import { IsInstanceOfPipe } from '../../pipes/is-instance-of.pipe';
import { HeaderService } from '../../services/header.service';
import { PartyHighlighterService } from '../../services/party-highlighter.service';

type Entry = Item | Weapon | Accessory;

@Component({
  selector: 'app-inventory-table',
  imports: [CursorComponent, IsInstanceOfPipe],
  templateUrl: './inventory-table.component.html',
  styleUrl: './inventory-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryTableComponent implements OnDestroy {
  columnTitle = input.required<'Quantity' | 'Equipped'>();
  entries = input.required<Entry[]>();
  protected readonly Item = Item;
  protected readonly Weapon = Weapon;
  protected readonly selectedEntry = signal<Entry | null>(null);
  protected readonly cursorX = signal(0);
  protected readonly cursorY = signal(0);
  protected readonly isCursorVisible = signal(false);
  private readonly headerService = inject(HeaderService);
  private readonly partyHighlighterService = inject(PartyHighlighterService);

  protected entryPairs = computed(() => this.entries().reduce((acc, curr, index) => {
    if (index % 2 === 0)
      acc.push([curr, this.entries()[index + 1]]);
    return acc;
  }, [] as Entry[][]));

  ngOnDestroy() {
    this.partyHighlighterService.setHighlightedCharacter(null);
  }

  protected setSelectedEntry(entry: Entry) {
    this.selectedEntry.set(entry);
    this.hideCursor();
    this.setHeaderText(entry);
    if (entry instanceof Weapon)
      this.partyHighlighterService.setHighlightedCharacter(entry.character);
  }

  private setHeaderText(entry: Entry) {
    let text = null;
    if (entry instanceof Item) {
      text = entry.effect;
    } else if (entry instanceof Weapon) {
      text = entry.description;
    } else if (entry instanceof Accessory) {
      text = entry.effect;
    }
    this.headerService.setText(text);
  }

  entryAs<T>(entry: Entry, target: new (...args: any[]) => T) {
    return entry as T;
  }

  moveCursor(event: MouseEvent, xCellIndex: number, yCellIndex: number) {
    const tableCellElement = event.currentTarget as HTMLTableCellElement;
    if (tableCellElement.classList.contains('selected')) {
      this.hideCursor();
      return;
    }
    const tableRowElement = tableCellElement.parentElement as HTMLTableRowElement;
    this.cursorX.set(xCellIndex * (tableRowElement.offsetWidth / 2));
    this.cursorY.set((yCellIndex + 1) * tableRowElement.offsetHeight);
    this.isCursorVisible.set(true);
  }

  hideCursor() {
    this.isCursorVisible.set(false);
  }
}
