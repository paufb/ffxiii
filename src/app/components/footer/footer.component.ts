import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [DecimalPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit, OnDestroy {
  protected readonly time = signal('');
  protected readonly gil = signal(0);
  private intervalId!: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.updateTime();
    this.intervalId = setInterval(() => this.updateTime(), 1000);
    this.gil.set(Math.floor(Math.random() * (50000 - 1000 + 1)) + 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private updateTime() {
    this.time.set(new Date().toISOString().substring(11, 19).padStart(9, '0'));
  }
}
