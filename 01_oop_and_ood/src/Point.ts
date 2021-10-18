export class Point {
  y: number
  x: number
  public constructor()
  public constructor(x: number, y: number)
  public constructor(...args: number[]) {
    if (args.length === 2) {
      const [x, y] = args
      this.x = x
      this.y = y
      return
    }
    this.x = 0
    this.y = 0
  }
  public toString() {
    return `(${this.x},${this.y})`
  }

  distance(...args: [] | [Point] | [number, number]): number {
    let distance = 0
    if (arguments.length === 0) {
      distance = Number(Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)).toFixed(2))
    }
    if (args.length === 1) {
      const [other] = args
      distance = Number(
        Math.sqrt(
          Math.pow(Math.abs(this.x - other.x), 2) + Math.pow(Math.abs(this.y - other.y), 2)
        ).toFixed(2)
      )
    }
    if (args.length === 2) {
      const [x, y] = args
      distance = Number(
        Math.sqrt(Math.pow(Math.abs(this.x - x), 2) + Math.pow(Math.abs(this.y - y), 2)).toFixed(2)
      )
    }
    return distance
  }
}
