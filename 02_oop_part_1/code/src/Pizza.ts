import { Consumable } from './Consumable'

export class Pizza extends Consumable {
  numberOfSlices: number
  slicesEaten: number
  constructor(
    numberOfSlices: number,
    spoiled = false,
    weight?: number,
    value?: number,
    name: string = 'pizza'
  ) {
    super({ name, spoiled, value, weight })
    this.numberOfSlices = numberOfSlices
    this.slicesEaten = 0
  }
  public eat() {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++

      if (this.slicesEaten >= this.numberOfSlices) {
        super.setConsumed(true)
      }
      console.log('you eat a slice of pizza')
    } else {
      console.log('')
    }
  }
}

// const pizza = new Pizza(1, false, 1000, 2.5)
// console.log(pizza)
// pizza.eat()
// pizza.eat()
// console.log(pizza)
