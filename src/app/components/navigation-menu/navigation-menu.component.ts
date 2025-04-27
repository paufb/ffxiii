import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HelpHeaderService } from '../../services/help-header.service';
import { TitleRulerComponent } from '../title-ruler/title-ruler.component';

interface NavigationMenuItem {
  title: string;
  url: string;
  helpHeaderText: string;
}

@Component({
  selector: 'app-navigation-menu',
  imports: [RouterLink, RouterLinkActive, TitleRulerComponent],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.css'
})
export class NavigationMenuComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) items!: NavigationMenuItem[];

  constructor(private helpHeaderService: HelpHeaderService) {}

  setHelpHeaderText(text: string) {
    this.helpHeaderService.setText(text);
  }
}
