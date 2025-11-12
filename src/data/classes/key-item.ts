import { Item } from './item';

export class KeyItem extends Item {
  constructor(props: Omit<ConstructorParameters<typeof Item>[0], 'quantity'>) {
    super({ ...props, quantity: 1 });
  }
}
