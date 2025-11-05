import { type ImageMetadata } from 'astro';

interface AssetProps {
  url: string;
  imageMetadata: ImageMetadata;
  width: number;
  height: number;
}

export class Asset {
  #props: AssetProps;

  constructor(props: AssetProps) {
    this.#props = props;
  };

  get url() { return this.#props.url; }
  get imageMetadata() { return this.#props.imageMetadata; }
  get width() { return this.#props.width; }
  get height() { return this.#props.height; }
}
