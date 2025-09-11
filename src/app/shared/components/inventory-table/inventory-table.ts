import { Component, computed, inject, input, OnDestroy, signal } from '@angular/core';
import { Cursor } from '@/shared/components/cursor/cursor';
import { Accessory } from '@/shared/models/accessory';
import { Item } from '@/shared/models/item';
import { Weapon } from '@/shared/models/weapon';
import { AppService } from '@/shared/services/app-service';

type Entry = Item | Weapon | Accessory;

@Component({
  selector: 'app-inventory-table',
  imports: [Cursor],
  templateUrl: './inventory-table.html',
  styleUrl: './inventory-table.scss'
})
export class InventoryTable implements OnDestroy {
  readonly columnTitle = input.required<'Quantity' | 'Equipped'>();
  readonly entries = input.required<Entry[]>();
  private readonly appService = inject(AppService);
  protected readonly selectedEntry = signal<Entry | null>(null);
  protected readonly entryPairs = computed(() => this.entries().reduce((acc, curr, index) => {
    if (index % 2 === 0) { acc.push([curr, this.entries()[index + 1]]); }
    return acc;
  }, [] as ReturnType<typeof this.entries>[number][][]));
  protected readonly cursorX = signal(0);
  protected readonly cursorY = signal(0);
  protected readonly isCursorVisible = signal(false);
  protected readonly Item = Item;
  protected readonly Weapon = Weapon;

  protected setSelectedEntry(entry: ReturnType<typeof this.entries>[number]) {
    this.selectedEntry.set(entry);
    this.isCursorVisible.set(false);
    this.appService.headerText.set(
      entry instanceof Item || entry instanceof Accessory
        ? entry.effect
        : entry instanceof Weapon
          ? entry.description
          : null
    );
    if (entry instanceof Weapon) {
      this.appService.highlightedCharacter.set(entry.character);
    }
  }

  protected moveCursor(event: MouseEvent, xCellIndex: number, yCellIndex: number) {
    const tableCellElement = event.currentTarget as HTMLTableCellElement;
    if (tableCellElement.classList.contains('selected')) {
      this.isCursorVisible.set(false);
      return;
    }
    const tableRowElement = tableCellElement.parentElement as HTMLTableRowElement;
    this.cursorX.set(xCellIndex * (tableRowElement.offsetWidth / 2));
    this.cursorY.set((yCellIndex + 1) * tableRowElement.offsetHeight);
    this.isCursorVisible.set(true);
  }

  protected isEntryInstanceOf<T extends Entry>(entry: Entry, ctor: new (...args: any[]) => T): entry is T {
    return entry instanceof ctor;
  }

  ngOnDestroy() {
    this.appService.highlightedCharacter.set(null);
  }
}
