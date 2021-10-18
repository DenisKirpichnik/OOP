import { Weapon } from './Weapon'
import { Item } from './Item'

export class Sword extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number,
    durabiliyModifier: number,
    damageModifier: number,
    name = 'sword'
  ) {
    super({
      baseDamage,
      baseDurability,
      value,
      weight,
      durabiliyModifier,
      damageModifier,
      name
    })
  }
}

// const a: Weapon = new Sword(30.4219, 0.7893, 300, 2.032, 0.06, 0.07)
// a.use()
// a.getDurability()
// a.use()
// a.getDurability()
// console.log("mySword", b);
