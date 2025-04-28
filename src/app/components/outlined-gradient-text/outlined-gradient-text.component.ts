import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-outlined-gradient-text',
  imports: [],
  templateUrl: './outlined-gradient-text.component.html',
  styleUrl: './outlined-gradient-text.component.css'
})
export class OutlinedGradientTextComponent {
  @Input({ required: true }) text!: string;
  @Input({ required: true }) colors!: `${string} ${number}%`[];
}
