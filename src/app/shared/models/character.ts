
import { type Asset } from '@/shared/models/asset';
import { type Role } from '@/shared/models/role';

interface CharacterProps {
  name: string;
  role: Role;
  healthPoints: number;
  crystogenPoints: number;
  equippedWeapon: string;
  isInParty: boolean;
  isPartyLeader: boolean;
  assets: {
    card: Asset
  };
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
