import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-ruler',
  imports: [],
  templateUrl: './title-ruler.component.html',
  styleUrl: './title-ruler.component.css'
})
export class TitleRulerComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) align!: 'start' | 'end';
}
