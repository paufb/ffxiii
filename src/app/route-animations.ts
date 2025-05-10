import { animate, group, query, stagger, style, transition, trigger } from '@angular/animations';

function fade(
  origin: 'from' | 'to',
  destination: 'top' | 'right' | 'bottom' | 'left',
  distance: string,
  staggerMs?: number
) {
  const initialOpacity = origin === 'from' ? 0 : 1;
  const finalOpacity = initialOpacity ^ 1;
  const translations: Record<typeof destination, string> = {
    top: `0, -${distance}`,
    right: `${distance}, 0`,
    bottom: `0, ${distance}`,
    left: `-${distance}, 0`
  };
  const initialTranslate = origin === 'from' ? translations[destination] : '0';
  const finalTranslate = origin === 'from' ? '0' : translations[destination];
  const animation = animate('.4s ease-in-out', style({ opacity: finalOpacity, transform: `translate(${finalTranslate})` }));
  return [
    style({ opacity: initialOpacity, transform: `translate(${initialTranslate})` }),
    staggerMs ? stagger(staggerMs, animation) : animation
  ];
}

export const appRouteAnimationsTrigger = trigger('routeAnimations', [
  transition('MainMenuPage => InventoryPage', [
    group([
      query('app-main-menu', style({ overflow: 'visible' })),
      query(':leave', [
        group([
          query('.animatable', style({ overflow: 'visible' })),
          query('app-navigation-menu', fade('to', 'left', '5rem')),
          query('.animatable app-character-card', fade('to', 'top', '65rem', -25))
        ])
      ]),
      query('app-inventory', style({ overflow: 'visible' })),
      query(':enter', [
        group([
          query('app-inventory > app-navigation-menu', fade('from', 'left', '5rem')),
          query('app-inventory > div', fade('from', 'right', '65rem'))
        ])
      ])
    ])
  ]),
  transition('InventoryPage => MainMenuPage', [
    group([
      query('app-inventory', style({ overflow: 'visible' })),
      query(':leave', [
        group([
          query('app-inventory > app-navigation-menu', fade('to', 'left', '5rem')),
          query('app-inventory > div', fade('to', 'right', '65rem'))
        ])
      ]),
      query('app-main-menu', style({ overflow: 'visible' })),
      query(':enter', [
        group([
          query('.animatable', style({ overflow: 'visible' })),
          query('app-character-card', fade('from', 'top', '65rem', 25)),
          query('app-navigation-menu', fade('from', 'left', '5rem'))
        ])
      ])
    ])
  ]),
  transition('* => MainMenuPage', [
    group([
      query('app-main-menu', style({ overflow: 'visible' })),
      query('.animatable', style({ overflow: 'visible' })),
      query(':enter app-navigation-menu', fade('from', 'left', '5rem')),
      query(':enter app-character-card', fade('from', 'top', '10rem', 50))
    ])
  ]),
  transition('* => InventoryPage', [
    group([
      query('app-inventory', style({ overflow: 'visible' })),
      query('app-inventory > app-navigation-menu', fade('from', 'left', '5rem')),
      query('app-inventory > div', fade('from', 'right', '5rem'))
    ])
  ])
]);
