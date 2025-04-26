import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavigationMenuItem {
  title: string;
  url: string;
}

@Component({
  selector: 'app-navigation-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.css'
})
export class NavigationMenuComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) items!: NavigationMenuItem[];
}
