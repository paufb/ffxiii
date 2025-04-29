import { NgOptimizedImage } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-cursor',
  imports: [NgOptimizedImage],
  templateUrl: './cursor.component.html',
  styleUrl: './cursor.component.css'
})
export class CursorComponent {
  @Input({ transform: booleanAttribute }) selection: boolean = false;
  @Input({ transform: booleanAttribute }) glide: boolean = false;
}
