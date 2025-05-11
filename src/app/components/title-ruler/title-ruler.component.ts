import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-title-ruler',
  imports: [],
  templateUrl: './title-ruler.component.html',
  styleUrl: './title-ruler.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleRulerComponent {
  title = input.required<string>();
  align = input.required<'start' | 'end'>();
}
