import {
  randomIntFromRange,
} from "../canvas";
import {
  oneUnitFromCanvas
} from "../utilities";


export class Laser {
  constructor(ctx, player, aliens){
    const oneUnit = oneUnitFromCanvas(ctx.canvas)
    this.color = 'green'
    this.fired = false
    this.velocity = 2
    this.x = player.unitX * oneUnit.x
    this.y = player.unitY * oneUnit.y
    this.aliens = aliens
    setInterval(()=>{
      this.color = `rgba(255,127,127,${Math.random()})`
    }, 500);
  }

  action(e, ctx){
    const oneUnit = oneUnitFromCanvas(ctx.canvas)
    switch(e.key){
      case ' ':
        this.fired = true
        break
    }
  }

  draw(ctx){
    ctx.beginPath()
    ctx.arc(this.x, this.y, 7, 0, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
  }

  update(ctx, player){
    const oneUnit = oneUnitFromCanvas(ctx.canvas)
    if (this.fired) {
      console.log('fired')
      this.y -= this.velocity * oneUnit.y
    } else {
      this.x = player.unitX * oneUnit.x
      this.y = player.unitY * oneUnit.y
    }
    if (this.y <= 0) {
      this.fired = false
      this.x = player.unitX * oneUnit.x
      this.y = player.unitY * oneUnit.y
    }
    this.draw((ctx))
  }

}