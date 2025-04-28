interface ItemProps {
  name: string;
  effect: string;
  quantity: number;
}

export class Item {
  #props: ItemProps;

  constructor(props: ItemProps) {
    this.#props = props;
  };

  get name() { return this.#props.name; }
  get effect() { return this.#props.effect; }
  get quantity() { return this.#props.quantity; }
}
