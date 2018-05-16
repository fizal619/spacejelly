import {
  randomIntFromRange, distance,
} from "../canvas";
import {
  oneUnitFromCanvas
} from "../utilities";


export class Laser {
  constructor(ctx, player){
    const oneUnit = oneUnitFromCanvas(ctx.canvas)
    this.color = 'green'
    this.fired = false
    this.velocity = 3
    this.unitX = player.unitX
    this.unitY = player.unitY
    this.x = player.unitX * oneUnit.x
    this.y = player.unitY * oneUnit.y
    this.box = 7
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
    ctx.arc(this.x, this.y, this.box, 0, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
  }

  checkColissions(aliens){
    let hit = aliens.reduce((p,c,i)=>{
      if (distance(c.unitX, c.unitY, this.unitX, this.unitY) <= (this.box + c.box + 20)) {
        return true
      }
    }, false)
    if (hit) {
      console.log('HIT')
    }
  }

  update(ctx, player, aliens){
    const oneUnit = oneUnitFromCanvas(ctx.canvas)
    if (this.fired) {
      this.y -= this.velocity * oneUnit.y
      this.unitY -= this.velocity
      this.checkColissions(aliens)
    } else {
      this.x = player.unitX * oneUnit.x
      this.y = player.unitY * oneUnit.y
      this.unitX = player.unitX
      this.unitY = player.unitY
    }
    if (this.y <= 0) {
      this.fired = false
      this.x = player.unitX * oneUnit.x
      this.y = player.unitY * oneUnit.y
      this.unitX = player.unitX
      this.unitY = player.unitY
    }
    this.draw((ctx))
  }

}