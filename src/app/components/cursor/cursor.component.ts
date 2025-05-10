import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-cursor',
  imports: [NgOptimizedImage],
  templateUrl: './cursor.component.html',
  styleUrl: './cursor.component.css',
  host: {
    '[class.glide]': 'glide()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CursorComponent {
  selection = input(false);
  glide = input(false);
}
