import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { HelpHeaderService } from '../../services/help-header.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {
  protected readonly text = signal<string | null>(null);
  private readonly helpHeaderService = inject(HelpHeaderService);
  private subscription!: Subscription;

  ngOnInit() {
    this.subscription = this.helpHeaderService.text$.subscribe((text) => this.text.set(text));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
