import { characterAssets } from '../constants/character-assets';
import { Role } from './role.model';
import { Weapon } from './weapon.model';

interface CharacterProps {
  name: string;
  role: Role;
  healthPoints: number;
  crystogenPoints: number;
  equippedWeapon: Weapon;
  isInParty: boolean;
  isPartyLeader: boolean;
  assets: typeof characterAssets[string];
}

export class Character {
  #props: CharacterProps;

  constructor(props: CharacterProps) {
    this.#props = props;
  };

  get name() { return this.#props.name; }
  get role() { return this.#props.role; }
  get healthPoints() { return this.#props.healthPoints; }
  get crystogenPoints() { return this.#props.crystogenPoints; }
  get equippedWeapon() { return this.#props.equippedWeapon; }
  get isInParty() { return this.#props.isInParty; }
  get isPartyLeader() { return this.#props.isPartyLeader; }
  get assets() { return this.#props.assets; }
}
