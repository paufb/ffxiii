import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private readonly _text = signal<string | null>(null);
  readonly text = this._text.asReadonly();

  setText(text: string | null) {
    this._text.set(text);
  }
}
