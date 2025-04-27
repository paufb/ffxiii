import { Role } from './role.model';

interface CharacterProps {
  name: string;
  role: Role;
  healthPoints: number;
  crystogenPoints: number;
  isInParty: boolean;
  isPartyLeader: boolean;
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
  get isInParty() { return this.#props.isInParty; }
  get isPartyLeader() { return this.#props.isPartyLeader; }
}
