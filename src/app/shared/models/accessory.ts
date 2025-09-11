interface AccessoryProps {
  name: string;
  effect: string;
}

export class Accessory {
  #props: AccessoryProps;

  constructor(props: AccessoryProps) {
    this.#props = props;
  };

  get name() { return this.#props.name; }
  get effect() { return this.#props.effect; }
}
