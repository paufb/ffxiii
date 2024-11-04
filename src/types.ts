export type Character = 'Lightning' | 'Vanille' | 'Fang' | 'Snow' | 'Sazh' | 'Hope';

export type MainMenuCategory = 'Inventory' | 'Datalog';
export type InventoryCategory = 'Items' | 'Weapons' | 'Accessories' | 'Components' | 'Key Items';

export interface Item {
  effect: string;
}

export interface Weapon {
  character: Character;
  description: string;
}
