import { Component, inject, input, OnDestroy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Cursor } from '@/shared/components/cursor/cursor';
import { TitleRuler } from '@/shared/components/title-ruler/title-ruler';
import { AppService } from '@/shared/services/app-service';

export interface NavigationMenuItem {
  title: string;
  url: string;
  headerText: string;
}

@Component({
  selector: 'app-navigation-menu',
  imports: [Cursor, RouterLink, RouterLinkActive, TitleRuler],
  templateUrl: './navigation-menu.html',
  styleUrl: './navigation-menu.scss'
})
export class NavigationMenu implements OnDestroy {
  readonly title = input.required<string>();
  readonly items = input.required<NavigationMenuItem[]>();
  private readonly appService = inject(AppService);
  protected readonly cursorY = signal(0);
  protected readonly isCursorVisible = signal(false);
  protected readonly headerText = this.appService.headerText;

  protected moveCursor(event: MouseEvent, listItemIndex: number) {
    const listItem = event.currentTarget as HTMLLIElement;
    if (listItem.querySelector('a')?.classList.contains('active')) {
      this.isCursorVisible.set(false);
      return;
    }
    this.cursorY.set((listItemIndex + 1) * 32);
    this.isCursorVisible.set(true);
  }

  ngOnDestroy() {
    this.headerText.set(null);
  }
}
