import { Item } from './Item'
import { ItemComparator } from './ItemComparator'

export class ItemWeightComparator implements ItemComparator {
  public compare(first: Item, second: Item): number {
    let res = 0
    if (first.weight > second.weight) {
      res = 1
    } else if (first.weight < second.weight) {
      res = -1
    } else if (first.weight === second.weight) {
      first.compareTo(second)
    }
    return res
  }
}
