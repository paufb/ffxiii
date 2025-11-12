interface ComponentProps {
  name: string;
  description: string;
  quantity: number;
}

export class Component {
  #props: ComponentProps;

  constructor(props: ComponentProps) {
    this.#props = props;
  }

  get name() {
    return this.#props.name;
  }

  get description() {
    return this.#props.description;
  }

  get quantity() {
    return this.#props.quantity;
  }
}
