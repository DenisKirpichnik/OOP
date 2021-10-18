import { Item, ItemConstructor } from './Item'

export interface ConsumableConstructorProps extends ItemConstructor {
  spoiled: boolean
  consumed: boolean
}

export abstract class Consumable extends Item {
  spoiled: boolean
  consumed: boolean
  constructor(props: any) {
    super(props)
    this.spoiled = props.spoiled
    this.consumed = false
  }
  use() {
    if (!this.consumed && !this.spoiled) {
      console.log(`You eat the ${this.name}.`)
    } else if (this.consumed) {
      console.log(`There is nothing left of the ${this.name} to consume`)
    } else if (!this.consumed && this.spoiled) {
      console.log(`You eat the ${this.name}. \n  You feel sick`)
    }
  }
}
