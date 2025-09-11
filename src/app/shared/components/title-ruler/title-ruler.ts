import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title-ruler',
  imports: [],
  templateUrl: './title-ruler.html',
  styleUrl: './title-ruler.scss'
})
export class TitleRuler {
  readonly title = input.required<string>();
  readonly alignment = input.required<'start' | 'end'>();
}
