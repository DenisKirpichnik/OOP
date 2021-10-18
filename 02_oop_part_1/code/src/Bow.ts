import { Weapon } from './Weapon'
import { Item } from './Item'

export class Bow extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number,
    durabiliyModifier: number,
    damageModifier: number,
    name = 'bow'
  ) {
    super({
      baseDamage,
      baseDurability,
      value,
      weight,
      durabiliyModifier,
      damageModifier,
      name: 'bow'
    })
  }
  polish() {
    this.baseDurability = this.baseDurability + super.MODIFIER_CHANGE_RATE
    if (this.baseDurability > 1) {
      this.baseDurability = 1
    }
  }
}

// const a: Weapon = new Bow(30.4219, 0.7893, 300, 2.032, 0.06, 0.07)

// console.log("mySword", b);
