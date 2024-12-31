export type Character = 'Lightning' | 'Vanille' | 'Fang' | 'Snow' | 'Sazh' | 'Hope';
export type Role = 'Commando' | 'Ravager' | 'Sentinel' | 'Saboteur' | 'Synergist' | 'Medic';

export type MainMenuCategory = 'Inventory' | 'Datalog';
export type InventoryCategory = 'Items' | 'Weapons' | 'Accessories' | 'Components' | 'Key Items';

export interface Item {
  effect: string;
}

export interface Weapon {
  character: Character;
  description: string;
}

export interface Accessory {
  effect: string;
}

export interface Component {
  description: string;
}
