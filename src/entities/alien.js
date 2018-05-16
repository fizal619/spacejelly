import {
  randomIntFromRange,
} from "../canvas";
import {
  oneUnitFromCanvas
} from "../utilities";


export class Alien {
  constructor(ctx, color){
    this.color = color
    this.timeout = 60
    this.shift = 0
    this.box = 7
  }

  resposition(ctx){
    const oneUnit = oneUnitFromCanvas(ctx.canvas);
    this.unitX = randomIntFromRange(0, 200)
    this.unitY = randomIntFromRange(50, 150)
    this.x = this.unitX * oneUnit.x
    this.y = this.unitY * oneUnit.y
    this.timeout = randomIntFromRange(180, 600)
    this.shift = 0
  }

  draw(ctx){
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.box, 0, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
  }

  update(ctx){
    if (this.timeout > this.shift) {
      this.shift++
    } else {
      this.resposition(ctx)
    }
    this.draw((ctx))

  }

}