import { Item, ItemConstructor } from './Item'

export interface WeaponConstructorProps extends ItemConstructor {
  baseDamage: number
  damageModifier?: number
  baseDurability: number
  durabiliyModifier?: number
}

export abstract class Weapon extends Item {
  MODIFIER_CHANGE_RATE: number = 0.05
  baseDamage: number
  baseDurability: number
  durabilityModifier: number = 0.05
  damageModifier: number = 0.05

  constructor(props: WeaponConstructorProps) {
    super(props)
    this.durabilityModifier = props.durabiliyModifier || this.durabilityModifier
    this.damageModifier = props.damageModifier || this.damageModifier
    this.baseDamage = props.baseDamage
    this.baseDurability = props.baseDurability
  }

  getDamage() {
    console.log(this.baseDamage)
  }

  getDurability() {
    console.log(this.baseDurability)
  }

  public toString() {
    if (this.damageModifier && this.durabilityModifier) {
      console.log(
        ` ${this.name}, Value: ${this.value}, Weight: ${this.weight}, Damage: ${
          this.baseDamage + this.damageModifier
        }, baseDurability ${this.baseDurability + this.durabilityModifier}`
      )
    }
  }

  public use() {
    if (this.baseDurability === 0) {
      console.log(`You can't use the ${this.name} , it is broken.`)
      return
    }

    if (this.baseDurability - this.MODIFIER_CHANGE_RATE <= 0) {
      console.log(
        `You use ${this.name}, dealing  ${
          this.baseDamage + this.damageModifier
        } points of damage. \n the ${this.name}  breaks`
      )
      this.baseDurability = 0
      return
    }
    console.log(
      `You use ${this.name}, dealing  ${this.baseDamage + this.damageModifier} points of damage`
    )
    this.baseDurability -= this.MODIFIER_CHANGE_RATE
  }
}
