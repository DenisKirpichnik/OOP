import { Comparable } from './Comparable'

let id = 0

export interface ItemConstructor {
  name: string
  value: number
  weight: number
}

export abstract class Item implements Comparable<Item> {
  static count = 0
  public id: number
  public value: number
  public weight: number
  public name: string
  constructor(props: ItemConstructor) {
    this.id = id++
    this.name = props.name
    this.value = props.value
    this.weight = props.weight
  }

  // public compareTo(other: Item) => number {
  // 	// your code goes here
  // }
  compareTo(other: Item) {
    if (this.value < other.value) {
      return -1
    } else if (this.value > other.value) {
      return 1
    } else if (this.value === other.value) {
      if (this.name > other.name) {
        return 1
      }
      if (this.name == other.name) {
        return 0
      }
      if (this.name < other.name) {
        return -1
      }
    }
  }

  getId() {
    console.log(this.id)
  }
  getValue() {
    console.log(this.value)
  }
  setValue(value: number) {
    this.value = value
  }
  getWeight() {
    console.log(this.weight)
  }
  setWeight(weight: number) {
    this.weight = weight
  }
  setName(newName: string) {
    this.name = newName
  }

  static reset() {
    id = 0
  }

  public toString() {
    console.log(` ${this.name}, Value: ${this.value}, Weight: ${this.weight}`)
  }
}
