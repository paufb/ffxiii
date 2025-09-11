import { Role } from '@/shared/models/role';

export const roles = {
  "Commando": new Role({
    name: "Commando",
    color :"#ff0000"
  }),
  "Ravager": new Role({
    name: "Ravager",
    color :"#8591c2"
  }),
  "Sentinel": new Role({
    name: "Sentinel",
    color :"#ffff00"
  }),
  "Saboteur": new Role({
    name: "Saboteur",
    color :"#808080"
  }),
  "Synergist": new Role({
    name: "Synergist",
    color :"#800080"
  }),
  "Medic": new Role({
    name: "Medic",
    color :"#ccffcc"
  })
};
