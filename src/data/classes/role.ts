interface RoleProps {
  name: string;
  color: `#${string}`;
}

export class Role {
  #props: RoleProps;

  constructor(props: RoleProps) {
    this.#props = props;
  };

  get name() { return this.#props.name; }
  get color() { return this.#props.color; }
}
