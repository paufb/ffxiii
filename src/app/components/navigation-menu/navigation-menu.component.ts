import { ChangeDetectionStrategy, Component, inject, input, OnDestroy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CursorComponent } from '../cursor/cursor.component';
import { HeaderService } from '../../services/header.service';
import { TitleRulerComponent } from '../title-ruler/title-ruler.component';
import { NavigationMenuItem } from '../../models/navigation-menu-item.interface';

@Component({
  selector: 'app-navigation-menu',
  imports: [CursorComponent, RouterLink, RouterLinkActive, TitleRulerComponent],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationMenuComponent implements OnDestroy {
  title = input.required<string>();
  items = input.required<NavigationMenuItem[]>();
  protected readonly cursorY = signal(0);
  protected readonly isCursorVisible = signal(false);
  private readonly headerService = inject(HeaderService);

  ngOnDestroy() {
    this.headerService.setText(null);
  }

  protected setHeaderText(text: string) {
    this.headerService.setText(text);
  }

  protected moveCursor(event: MouseEvent, listItemIndex: number) {
    const listItem = event.currentTarget as HTMLLIElement;
    if (listItem.querySelector('a')?.classList.contains('active')) {
      this.hideCursor();
      return;
    }
    this.cursorY.set((listItemIndex + 1) * 32);
    this.isCursorVisible.set(true);
  }

  protected hideCursor() {
    this.isCursorVisible.set(false);
  }
}
