import { Item } from '../models/item.model';
import { getRandomNumber } from './utils';

export const items: Record<string, Item> = {
  "Potion": new Item({
    name: "Potion",
    effect: "Restores small amount of HP to all party members.",
    quantity: getRandomNumber(1, 20)
  }),
  "Phoenix Down": new Item({
    name: "Phoenix Down",
    effect: "Revives one ally from KO.",
    quantity: getRandomNumber(1, 20)
  }),
  "Librascope": new Item({
    name: "Librascope",
    effect: "Reveals detailed information on all enemies.",
    quantity: getRandomNumber(1, 20)
  }),
  "Antidote": new Item({
    name: "Antidote",
    effect: "Removes Poison from on ally.",
    quantity: getRandomNumber(1, 20)
  }),
  "Holy Water": new Item({
    name: "Holy Water",
    effect: "Removes Curse from one ally.",
    quantity: getRandomNumber(1, 20)
  }),
  "Painkiller": new Item({
    name: "Painkiller",
    effect: "Removes Pain from one ally.",
    quantity: getRandomNumber(1, 20)
  }),
  "Mallet": new Item({
    name: "Mallet",
    effect: "Removes Fog from one ally.",
    quantity: getRandomNumber(1, 20)
  }),
  "Foul Liquid": new Item({
    name: "Foul Liquid",
    effect: "Removes Daze from one ally.",
    quantity: getRandomNumber(1, 20)
  }),
  "Wax": new Item({
    name: "Wax",
    effect: "Removes Imperil from one ally.",
    quantity: getRandomNumber(1, 20)
  }),
  "Elixir": new Item({
    name: "Elixir",
    effect: "Restores all HP and TP.",
    quantity: getRandomNumber(1, 20)
  }),
  "Fortisol": new Item({
    name: "Fortisol",
    effect: "Casts Bravery, Faith, and Haste at the start of battle.",
    quantity: getRandomNumber(1, 20)
  }),
  "Aegisol": new Item({
    name: "Aegisol",
    effect: "Casts Protect, Shell, Veil, and Vigilance at start of battle.",
    quantity: getRandomNumber(1, 20)
  }),
  "Deceptisol": new Item({
    name: "Deceptisol",
    effect: "Makes the party difficult for passing enemies to detect.",
    quantity: getRandomNumber(1, 20)
  }),
  "Ethersol": new Item({
    name: "Ethersol",
    effect: "Restores the party's TP.",
    quantity: getRandomNumber(1, 20)
  })
};
