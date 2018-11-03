import { randomIntFromRange } from "../canvas";

export class Star {
  constructor(ctx){
    this.x = randomIntFromRange(10, ctx.canvas.width-10)
    this.y = randomIntFromRange(10, ctx.canvas.height-10)
    this.r = randomIntFromRange(1, 2)
    this.color = 'rgba(255,255,255,1)'
    setInterval(()=>{
      this.color = `rgba(255,255,255,${Math.random()})`
    }, 1000/12);

  }


  draw(ctx){
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
  }

  update(ctx){
    this.draw((ctx))
  }

}
