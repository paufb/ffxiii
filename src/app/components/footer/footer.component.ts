import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [DecimalPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  time!: string;
  gil!: number;
  private intervalId!: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.updateTime();
    this.intervalId = setInterval(() => this.updateTime(), 1000);
    this.gil = Math.floor(Math.random() * (50000 - 1000 + 1)) + 1000;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private updateTime() {
    this.time = new Date().toISOString().substring(11, 19).padStart(9, '0');
  }
}
