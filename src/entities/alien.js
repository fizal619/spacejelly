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
    this.x = randomIntFromRange(10, ctx.canvas.width-10)
    this.y = randomIntFromRange(200, ctx.canvas.height-200)
    this.invertedX = ctx.canvas.width - this.x
    this.invertedY = ctx.canvas.height - this.y
    this.timeout = randomIntFromRange(180, 400)
    this.shift = 0
  }

  getPosition(){
    return {
      x: this.x,
      y: this.y,
      invertedX: this.invertedX,
      invertedY: this.invertedY
    }
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
    this.draw(ctx)

  }

}