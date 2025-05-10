import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { appRouteAnimationsTrigger } from './route-animations';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [appRouteAnimationsTrigger]
})
export class AppComponent {
  protected getRouteAnimationData(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'];
  }
}
