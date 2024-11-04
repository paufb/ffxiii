import { Item } from '../types.ts';

export const itemsData: { [key: string]: Item } = {
  "Potion": {
    effect: "Restores small amount of HP to all party members."
  },
  "Phoenix Down": {
    effect: "Revives one ally from KO."
  },
  "Librascope": {
    effect: "Reveals detailed information on all enemies."
  },
  "Antidote": {
    effect: "Removes Poison from on ally."
  },
  "Holy Water": {
    effect: "Removes Curse from one ally."
  },
  "Painkiller": {
    effect: "Removes Pain from one ally."
  },
  "Mallet": {
    effect: "Removes Fog from one ally."
  },
  "Foul Liquid": {
    effect: "Removes Daze from one ally."
  },
  "Wax": {
    effect: "Removes Imperil from one ally."
  },
  "Elixir": {
    effect: "Restores all HP and TP."
  },
  "Fortisol": {
    effect: "Casts Bravery, Faith, and Haste at the start of battle."
  },
  "Aegisol": {
    effect: "Casts Protect, Shell, Veil, and Vigilance at start of battle."
  },
  "Deceptisol": {
    effect: "Makes the party difficult for passing enemies to detect."
  },
  "Ethersol": {
    effect: "Restores the party's TP."
  }
};
