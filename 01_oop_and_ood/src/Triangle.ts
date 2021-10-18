import { Shape } from './Shape'
import { Point } from './Point'

export class Triangle extends Shape {
  constructor(point1: Point, point2: Point, point3: Point)
  constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean)
  constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean) {
    const points = [point1, point2, point3]
    super(points, color, filled)
  }

  public toString() {
    return `Triangle[v1=${this.points[0]},v2=${this.points[1]},v3=${this.points[2]}]`
  }

  getType() {
    const firstS = this.points[0].distance(this.points[1])
    const secondS = this.points[0].distance(this.points[2])
    const thirdS = this.points[1].distance(this.points[2])
    if (firstS === secondS && firstS === thirdS) {
      return 'equilateral triangle'
    } else if (firstS === secondS || secondS === thirdS || firstS === thirdS) {
      return 'isosceles triangle'
    } else {
      return 'scalene triangle'
    }
  }
}
