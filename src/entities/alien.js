import {
  randomIntFromRange,
} from "../canvas";
import {
  oneUnitFromCanvas
} from "../utilities";


export class Alien {
  constructor(ctx, color){
    this.color = color
    this.resposition(ctx)
    this.timeout = 1000
  }

  resposition(ctx){
    const oneUnit = oneUnitFromCanvas(ctx.canvas);
    this.unitX = randomIntFromRange(0, 200)
    this.unitY = randomIntFromRange(50, 150)
    this.x = this.unitX * oneUnit.x
    this.y = this.unitY * oneUnit.y
    setTimeout(()=>{
      this.timeout = randomIntFromRange(1000, 5000)
      this.resposition(ctx)
    }, this.timeout);
  }

  draw(ctx){
    ctx.beginPath()
    ctx.arc(this.x, this.y, 5, 0, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
  }

  update(ctx){
    this.draw((ctx))

  }

}