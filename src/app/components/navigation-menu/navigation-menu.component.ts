import { NgIf } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CursorComponent } from '../cursor/cursor.component';
import { HelpHeaderService } from '../../services/help-header.service';
import { TitleRulerComponent } from '../title-ruler/title-ruler.component';

interface NavigationMenuItem {
  title: string;
  url: string;
  helpHeaderText: string;
}

@Component({
  selector: 'app-navigation-menu',
  imports: [CursorComponent, NgIf, RouterLink, RouterLinkActive, TitleRulerComponent],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.css'
})
export class NavigationMenuComponent implements OnDestroy {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) items!: NavigationMenuItem[];
  cursorY = 0;
  isCursorVisible = false;

  constructor(private helpHeaderService: HelpHeaderService) {}

  ngOnDestroy() {
    this.helpHeaderService.setText(null);
  }

  setHelpHeaderText(text: string) {
    this.helpHeaderService.setText(text);
  }

  moveCursor(event: MouseEvent, listItemIndex: number) {
    const listItem = event.currentTarget as HTMLLIElement;
    if (listItem.querySelector('a')?.classList.contains('active')) {
      this.hideCursor();
      return;
    }
    this.cursorY = (listItemIndex + 1) * 32;
    this.isCursorVisible = true;
  }

  hideCursor() {
    this.isCursorVisible = false;
  }
}
