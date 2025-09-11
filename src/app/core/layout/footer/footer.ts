import { AsyncPipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, startWith } from 'rxjs';

@Component({
  selector: 'app-footer',
  imports: [AsyncPipe, DecimalPipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  protected readonly time$ = interval(1000).pipe(
    startWith(0),
    map(() => new Date().toISOString().substring(11, 19).padStart(9, '0'))
  );
  protected readonly gil = Math.floor(Math.random() * (50000 - 1000 + 1)) + 1000;
}
