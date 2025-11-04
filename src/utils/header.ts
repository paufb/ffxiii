export interface IHeaderUpdateEvent {
  text: string | null;
}

export const HEADER_UPDATE_EVENT_TYPE = 'header:update'

export function updateHeader(text: IHeaderUpdateEvent['text']) {
  const headerUpdateEvent = new CustomEvent<IHeaderUpdateEvent>(HEADER_UPDATE_EVENT_TYPE, { detail: { text } })
  window.dispatchEvent(headerUpdateEvent);
}
