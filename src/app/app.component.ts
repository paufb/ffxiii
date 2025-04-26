import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelpHeaderComponent } from "./components/help-header/help-header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelpHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
