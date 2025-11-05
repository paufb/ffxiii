import { getRandomNumber } from '../../utils/utils';
import { Asset } from '../classes/asset';
import { Character } from '../classes/character';
import { roles } from './roles';
import Lightning from '../../assets/characters/Lightning.png';
import Vanille from '../../assets/characters/Vanille.png';
import Fang from '../../assets/characters/Fang.png';
import Snow from '../../assets/characters/Snow.png';
import Sazh from '../../assets/characters/Sazh.png';
import Hope from '../../assets/characters/Hope.png';

export const characters = {
  Lightning: new Character({
    name: 'Lightning',
    role: roles['Commando'],
    healthPoints: getRandomNumber(2500, 3500),
    crystogenPoints: getRandomNumber(500, 1500),
    equippedWeapon: 'Blazefire Saber',
    isInParty: true,
    isPartyLeader: true,
    assets: {
      card: new Asset({
        url: '/assets/characters/Lightning.png',
        imageMetadata: Lightning,
        width: 813,
        height: 1906,
      }),
    },
  }),
  Vanille: new Character({
    name: 'Vanille',
    role: roles['Medic'],
    healthPoints: getRandomNumber(2500, 3500),
    crystogenPoints: getRandomNumber(500, 1500),
    equippedWeapon: 'Binding Rod',
    isInParty: true,
    isPartyLeader: false,
    assets: {
      card: new Asset({
        url: '/assets/characters/Vanille.png',
        imageMetadata: Vanille,
        width: 970,
        height: 1755,
      }),
    },
  }),
  Fang: new Character({
    name: 'Fang',
    role: roles['Ravager'],
    healthPoints: getRandomNumber(2500, 3500),
    crystogenPoints: getRandomNumber(500, 1500),
    equippedWeapon: 'Bladed Lance',
    isInParty: true,
    isPartyLeader: false,
    assets: {
      card: new Asset({
        url: '/assets/characters/Fang.png',
        imageMetadata: Fang,
        width: 1550,
        height: 1575,
      }),
    },
  }),
  Snow: new Character({
    name: 'Snow',
    role: roles['Sentinel'],
    healthPoints: getRandomNumber(2500, 3500),
    crystogenPoints: getRandomNumber(500, 1500),
    equippedWeapon: 'Wild Bear',
    isInParty: false,
    isPartyLeader: false,
    assets: {
      card: new Asset({
        url: '/assets/characters/Snow.png',
        imageMetadata: Snow,
        width: 1283,
        height: 2035,
      }),
    },
  }),
  Sazh: new Character({
    name: 'Sazh',
    role: roles['Synergist'],
    healthPoints: getRandomNumber(2500, 3500),
    crystogenPoints: getRandomNumber(500, 1500),
    equippedWeapon: 'Vega 42s',
    isInParty: false,
    isPartyLeader: false,
    assets: {
      card: new Asset({
        url: '/assets/characters/Sazh.png',
        imageMetadata: Sazh,
        width: 721,
        height: 2253,
      }),
    },
  }),
  Hope: new Character({
    name: 'Hope',
    role: roles['Saboteur'],
    healthPoints: getRandomNumber(2500, 3500),
    crystogenPoints: getRandomNumber(500, 1500),
    equippedWeapon: 'Airwing',
    isInParty: false,
    isPartyLeader: false,
    assets: {
      card: new Asset({
        url: '/assets/characters/Hope.png',
        imageMetadata: Hope,
        width: 988,
        height: 1228,
      }),
    },
  }),
};
