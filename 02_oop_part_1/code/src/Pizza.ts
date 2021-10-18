import { Consumable } from './Consumable'

export class Pizza extends Consumable {
  numberOfSlices: number
  slicesEaten: number
  constructor(
    numberOfSlices: number,
    name: string,
    value: number,
    weight: number,
    spoiled = false
  ) {
    super({ name, spoiled, value, weight })
    this.numberOfSlices = numberOfSlices
    this.slicesEaten = 0
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

// const pizza = new Pizza(12, 'pizza', 1000, 2.5)
// console.log(pizza)
