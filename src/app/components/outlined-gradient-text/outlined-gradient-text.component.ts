import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-outlined-gradient-text',
  imports: [],
  templateUrl: './outlined-gradient-text.component.html',
  styleUrl: './outlined-gradient-text.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutlinedGradientTextComponent {
  text = input.required<string>();
  colors = input.required<`${string} ${number}%`[]>();
}
