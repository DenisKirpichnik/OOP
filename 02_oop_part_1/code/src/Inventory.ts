import { Item } from './Item'
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

  toString() {
    return this.items
    //this.items.map(item => JSON.stringify(item)).join(',')
  }

  sort(comparator?: ItemComparator): void {
    if (comparator) {
      this.items = this.items.sort(comparator.compare)
      return
    }

    this.items = this.items.sort((a: Item, b: Item) => a.value - b.value)
  }
}
