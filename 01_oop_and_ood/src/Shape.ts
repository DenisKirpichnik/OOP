import { Point } from './Point'

export abstract class Shape {
  color: string
  filled: boolean
  public points: Point[]
  public constructor(points: Point[])
  public constructor(points: Point[], color?: string, filled?: boolean)
  public constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length < 3) throw new Error('provide at least 3 points')
    this.points = points
    if (color !== undefined && filled !== undefined) {
      this.color = color
      this.filled = filled
    }
    if (!color && !filled) {
      this.color = 'green'
      this.filled = true
    }
  }
  public toString() {
    return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${this.points}.`
     
  }
  getPerimeter() {
    const allPoints = this.points
    let perimeter = 0

    let first = allPoints[0]
    let last = allPoints[allPoints.length - 1]
    for (let i = 0; i < allPoints.length - 1; i++) {
      perimeter += allPoints[i].distance(allPoints[i + 1])
    }
    perimeter += first.distance(last)
    return perimeter
  }
  abstract getType(): string
}
