import { Asset } from '../models/asset.model';
import { characters } from './characters';

interface CharacterAssets {
  card: Asset;
}

export const characterAssets: Record<keyof typeof characters, CharacterAssets> = {
  'Lightning': {
    card: new Asset({
      url: 'assets/characters/Lightning.png',
      width: 813,
      height: 1906
    })
  },
  'Vanille': {
    card: new Asset({
      url: 'assets/characters/Vanille.png',
      width: 970,
      height: 1755
    })
  },
  'Fang': {
    card: new Asset({
      url: 'assets/characters/Fang.png',
      width: 1550,
      height: 1575
    })
  },
  'Snow': {
    card: new Asset({
      url: 'assets/characters/Snow.png',
      width: 1283,
      height: 2035
    })
  },
  'Sazh': {
    card: new Asset({
      url: 'assets/characters/Sazh.png',
      width: 721,
      height: 2253
    })
  },
  'Hope': {
    card: new Asset({
      url: 'assets/characters/Hope.png',
      width: 988,
      height: 1228
    })
  },
};
