interface AssetProps {
  url: string;
  width: number;
  height: number;
}

export class Asset {
  #props: AssetProps;

  constructor(props: AssetProps) {
    this.#props = props;
  };

  get url() { return this.#props.url; }
  get width() { return this.#props.width; }
  get height() { return this.#props.height; }
}
