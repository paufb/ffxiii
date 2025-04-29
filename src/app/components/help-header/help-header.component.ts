import { Component } from '@angular/core';
import { HelpHeaderService } from '../../services/help-header.service';

@Component({
  selector: 'app-help-header',
  imports: [],
  templateUrl: './help-header.component.html',
  styleUrl: './help-header.component.css'
})
export class HelpHeaderComponent {
  text!: string | null;

  constructor(private helpHeaderService: HelpHeaderService) {
    this.helpHeaderService.text$.subscribe((text) => this.text = text);
  }
}
