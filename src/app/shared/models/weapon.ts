import { characters } from '@/shared/constants/characters';

interface WeaponProps {
  name: string;
  character: keyof typeof characters;
  description: string;
}

export class Weapon {
  #props: WeaponProps;

  constructor(props: WeaponProps) {
    this.#props = props;
  };

  get name() { return this.#props.name; }
  get character() { return characters[this.#props.character]; }
  get description() { return this.#props.description; }

  get isEquipped() {
    return Object.values(characters).some((character) => character.equippedWeapon === this.#props.name);
  }
}
