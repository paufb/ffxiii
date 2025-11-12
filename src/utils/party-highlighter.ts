import { type characters } from '../data/constants/characters';

export interface IPartyHighlighterUpdateEvent {
  character: keyof typeof characters | null;
}

export const PARTY_HIGHLIGHTER_UPDATE_EVENT_TYPE = 'partyhighlighter:update';

export function highlightCharacter(character: IPartyHighlighterUpdateEvent['character']) {
  const partyHighlighterUpdateEvent = new CustomEvent<IPartyHighlighterUpdateEvent>(
    PARTY_HIGHLIGHTER_UPDATE_EVENT_TYPE,
    { detail: { character } }
  );
  window.dispatchEvent(partyHighlighterUpdateEvent);
}
