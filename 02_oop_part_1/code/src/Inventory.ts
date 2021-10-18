import { Item } from './Item'
import { Bow } from './Bow'
import { Sword } from './Sword'
import { Pizza } from './Pizza'
import { ItemWeightComparator } from './ItemWeightComparator'
import { ItemComparator } from './ItemComparator'

export class Inventory {
  items: Item[]
  constructor() {
    this.items = []
  }
  addItem(item: Item) {
    this.items.push(item)
  }
  //   sort() {
  //     this.items = this.items.sort((a: Item, b: Item) => a.value - b.value)
  //   }
  sort(ItemWeightComparator: ItemComparator) {
    this.items = this.items.sort((a: Item, b: Item) => a.value - b.value)
  }
}

const inventory = new Inventory()

const bow: Item = new Bow(30.4219, 0.7893, 3000, 2.032, 0.06, 0.07)
const pizza: Item = new Pizza(12, 'pizza', 1000, 2.5)
const sword: Item = new Sword(30.4219, 0.7893, 5000, 2.032, 0.06, 0.07)

console.log(sword.compareTo(bow))

// inventory.addItem(bow)
// inventory.addItem(pizza)
// inventory.addItem(sword)
// console.log('inventory before sorting ---', inventory.items)
inventory.sort(ItemWeightComparator)
// console.log('inventory after ---', inventory.items)
