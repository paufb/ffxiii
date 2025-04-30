import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HelpHeaderComponent } from './components/help-header/help-header.component';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, HelpHeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
