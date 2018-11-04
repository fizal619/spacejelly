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
    this.alive = true
    this.frame = 0
    this.image = new Image()
    this.image.src = `assets/alien/${color}_alien.png`
    this.width = 24
    this.height = 24
    setInterval(()=>{
      this.frame ++
      if(this.frame === 7) this.frame = 0
    }, 1000/12)

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

  kill(){
    this.alive = false
  }

  draw(ctx){
    if(this.alive){
      ctx.drawImage(this.image,this.frame * 32, 0, 32, 32, this.x - this.width/2, this.y - this.height/2, this.width, this.height)
    }
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