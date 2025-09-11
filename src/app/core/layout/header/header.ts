import { Component, inject } from '@angular/core';
import { AppService } from '@/shared/services/app-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  private readonly appService = inject(AppService);
  protected readonly headerText = this.appService.headerText;
}
