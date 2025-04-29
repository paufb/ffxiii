import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpHeaderService {
  textSubject = new BehaviorSubject<string | null>(null);
  text$ = this.textSubject.asObservable();

  setText(text: string | null) {
    this.textSubject.next(text);
  }
}
