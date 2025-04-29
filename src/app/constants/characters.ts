import { Character } from '../models/character.model';
import { characterAssets } from './character-assets';
import { roles } from './roles';
import { getRandomNumber } from './utils';
import { weapons } from './weapons';

export const characters: Record<string, Character> = {
  'Lightning': new Character({
    name: 'Lightning',
    role: roles['Commando'],
    healthPoints: getRandomNumber(2500, 3500),
    crystogenPoints: getRandomNumber(500, 1500),
    equippedWeapon: weapons['Blazefire Saber'],
    isInParty: true,
    isPartyLeader: true,
    assets: characterAssets['Lightning']
  }),
  'Vanille': new Character({
    name: 'Vanille',
    role: roles['Medic'],
    healthPoints: getRandomNumber(2500, 3500),
    crystogenPoints: getRandomNumber(500, 1500),
    equippedWeapon: weapons['Binding Rod'],
    isInParty: true,
    isPartyLeader: false,
    assets: characterAssets['Vanille']
  }),
  'Fang': new Character({
    name: 'Fang',
    role: roles['Ravager'],
    healthPoints: getRandomNumber(2500, 3500),
    crystogenPoints: getRandomNumber(500, 1500),
    equippedWeapon: weapons['Bladed Lance'],
    isInParty: true,
    isPartyLeader: false,
    assets: characterAssets['Fang']
  }),
  'Snow': new Character({
    name: 'Snow',
    role: roles['Sentinel'],
    healthPoints: getRandomNumber(2500, 3500),
    crystogenPoints: getRandomNumber(500, 1500),
    equippedWeapon: weapons['Wild Bear'],
    isInParty: false,
    isPartyLeader: false,
    assets: characterAssets['Snow']
  }),
  'Sazh': new Character({
    name: 'Sazh',
    role: roles['Synergist'],
    healthPoints: getRandomNumber(2500, 3500),
    crystogenPoints: getRandomNumber(500, 1500),
    equippedWeapon: weapons['Vega 42s'],
    isInParty: false,
    isPartyLeader: false,
    assets: characterAssets['Sazh']
  }),
  'Hope': new Character({
    name: 'Hope',
    role: roles['Saboteur'],
    healthPoints: getRandomNumber(2500, 3500),
    crystogenPoints: getRandomNumber(500, 1500),
    equippedWeapon: weapons['Airwing'],
    isInParty: false,
    isPartyLeader: false,
    assets: characterAssets['Hope']
  })
};
