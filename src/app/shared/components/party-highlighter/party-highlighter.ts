import { Component, inject } from '@angular/core';
import { characters } from '@/shared/constants/characters';
import { AppService } from '@/shared/services/app-service';

@Component({
  selector: 'app-party-highlighter',
  imports: [],
  templateUrl: './party-highlighter.html',
  styleUrl: './party-highlighter.scss'
})
export class PartyHighlighter {
  private readonly appService = inject(AppService);
  protected readonly characters = Object.values(characters);
  protected readonly highlightedCharacter = this.appService.highlightedCharacter;
}
