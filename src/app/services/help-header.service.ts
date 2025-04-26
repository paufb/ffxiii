import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpHeaderService {
  textSubject = new BehaviorSubject<string>('');
  text$ = this.textSubject.asObservable();

  setText(text: string) {
    this.textSubject.next(text);
  }
}
