import { animate, group, query, sequence, stagger, style, transition, trigger } from '@angular/animations';

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
      query(':leave', style({ position: 'fixed' })),
      query(':leave app-navigation-menu', fade('to', 'left', '5rem')),
      query(':leave .animatable', style({ width: '1032px' })),
      query(':leave .animatable app-character-card', fade('to', 'top', '65rem', -25)),
      query(':enter app-navigation-menu', fade('from', 'left', '5rem')),
      query(':enter .animatable', sequence([
        style({ position: 'fixed', width: '992px', height: 'min-content' }),
        ...fade('from', 'right', '65rem')
      ]))
    ]),
  ]),
  transition('InventoryPage => MainMenuPage', [
    group([
      query(':leave .animatable', sequence([
        style({ position: 'fixed', width: '992px' }),
        ...fade('to', 'right', '65rem')
      ])),
      query(':leave', style({ position: 'fixed' })),
      query(':leave app-navigation-menu', fade('to', 'left', '5rem')),
      query(':enter app-character-card', fade('from', 'top', '65rem', 25)),
      query(':enter app-navigation-menu', fade('from', 'left', '5rem')),
    ])
  ]),
  transition('* => MainMenuPage', [
    group([
      query(':enter app-navigation-menu', fade('from', 'left', '5rem')),
      query(':enter app-character-card', fade('from', 'top', '10rem', 50)),
    ]),
  ]),
  transition('* => InventoryPage', [
    group([
      query(':enter app-navigation-menu', fade('from', 'left', '5rem')),
      query(':enter .animatable', sequence([
          style({ position: 'fixed', width: '992px' }),
          ...fade('from', 'right', '5rem')
      ]))
    ]),
  ])
]);
