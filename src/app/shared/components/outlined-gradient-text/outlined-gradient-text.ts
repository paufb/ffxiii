import { Component, input } from '@angular/core';

@Component({
  selector: 'app-outlined-gradient-text',
  imports: [],
  templateUrl: './outlined-gradient-text.html',
  styleUrl: './outlined-gradient-text.scss'
})
export class OutlinedGradientText {
  readonly text = input.required<string>();
  readonly colors = input.required<`${string} ${number}%`[]>();
}
