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

  getId(): void {
    console.log(this.id)
  }
  getValue(): void {
    console.log(this.value)
  }
  getWeight(): void {
    console.log(this.weight)
  }
  setValue(value: number): void {
    this.value = value
  }
  setWeight(weight: number): void {
    this.weight = weight
  }
  setName(newName: string): void {
    this.name = newName
  }

  static reset(): void {
    id = 0
  }

  public toString() {
    console.log(` ${this.name}, Value: ${this.value}, Weight: ${this.weight}`)
  }
}
