// Create the inventory
import { Inventory } from './code/src/Inventory'
import { Item } from './code/src/Item'
import { ItemWeightComparator } from './code/src/ItemWeightComparator'
import { Pizza } from './code/src/Pizza'
import { Sword } from './code/src/Sword'
import { Weapon } from './code/src/Weapon'

const inventory: Inventory = new Inventory()

// Create a set of items
const a: Weapon = new Sword(30.4219, 0.76, 300, 2.032)
const b: Weapon = new Sword(40, 0.7893, 200, 2)
const c: Weapon = new Sword(40, 1, 100, 3)
const pizza: Item = new Pizza(12, false, 5)

// Add the items to the inventory
inventory.addItem(a)
inventory.addItem(b)
inventory.addItem(c)
inventory.addItem(pizza)

// Display the inventory
console.log(inventory.toString())

// Sort by natural order
inventory.sort()

// // // Display the new inventory
console.log(inventory.toString())

// Sort by weight
inventory.sort(new ItemWeightComparator())

// Display the inventory again
console.log(inventory.toString())

// Use the sword
a.use()
a.use()
a.toString()
