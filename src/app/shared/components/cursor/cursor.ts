import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'app-cursor',
  imports: [],
  templateUrl: './cursor.html',
  styleUrl: './cursor.scss',
  host: {
    '[class.glide]': 'glide()'
  }
})
export class Cursor {
  readonly selection = input(false, { transform: booleanAttribute });
  readonly glide = input(false, { transform: booleanAttribute });
}
