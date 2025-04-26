import { Component } from '@angular/core';
import { NavigationMenuComponent } from "../../components/navigation-menu/navigation-menu.component";

@Component({
  selector: 'app-main-menu',
  imports: [NavigationMenuComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  title = 'Main Menu';
  navigationMenuItems = [
    {
      title: 'Inventory',
      url: '/inventory',
      helpHeaderText: 'View party inventory.'
    },
    {
      title: 'Datalog',
      url: '/datalog',
      helpHeaderText: 'View log of accumulated data.'
    }
  ];
}
