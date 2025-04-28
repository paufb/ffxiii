import { Character } from '../models/character.model';
import { characterAssets } from './character-assets';
import { roles } from './roles';
import { getRandomNumber } from './utils';

export const characters: Record<string, Character> = {
  'Lightning': new Character({
    name: 'Lightning',
    role: roles['Commando'],
    healthPoints: getRandomNumber(2500, 3500),
    crystogenPoints: getRandomNumber(500, 1500),
    isInParty: true,
    isPartyLeader: true,
    assets: characterAssets['Lightning']
  }),
  'Vanille': new Character({
    name: 'Vanille',
    role: roles['Medic'],
    healthPoints: getRandomNumber(2500, 3500),
    crystogenPoints: getRandomNumber(500, 1500),
    isInParty: true,
    isPartyLeader: false,
    assets: characterAssets['Vanille']
  }),
  'Fang': new Character({
    name: 'Fang',
    role: roles['Ravager'],
    healthPoints: getRandomNumber(2500, 3500),
    crystogenPoints: getRandomNumber(500, 1500),
    isInParty: true,
    isPartyLeader: false,
    assets: characterAssets['Fang']
  }),
  'Snow': new Character({
    name: 'Snow',
    role: roles['Sentinel'],
    healthPoints: getRandomNumber(2500, 3500),
    crystogenPoints: getRandomNumber(500, 1500),
    isInParty: false,
    isPartyLeader: false,
    assets: characterAssets['Snow']
  }),
  'Sazh': new Character({
    name: 'Sazh',
    role: roles['Synergist'],
    healthPoints: getRandomNumber(2500, 3500),
    crystogenPoints: getRandomNumber(500, 1500),
    isInParty: false,
    isPartyLeader: false,
    assets: characterAssets['Sazh']
  }),
  'Hope': new Character({
    name: 'Hope',
    role: roles['Saboteur'],
    healthPoints: getRandomNumber(2500, 3500),
    crystogenPoints: getRandomNumber(500, 1500),
    isInParty: false,
    isPartyLeader: false,
    assets: characterAssets['Hope']
  })
};
