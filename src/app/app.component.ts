import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HelpHeaderComponent } from './components/help-header/help-header.component';
import { appRouteAnimationsTrigger } from './route-animations';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, HelpHeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [appRouteAnimationsTrigger]
})
export class AppComponent {
  getRouteAnimationData(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'];
  }
}
