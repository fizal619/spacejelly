import {
  randomIntFromRange, distance,
} from "../canvas";
import {
  oneUnitFromCanvas
} from "../utilities";


export class Laser {
  constructor(ctx, player){
    this.color = 'green'
    this.fired = false
    this.velocity = 3
    this.box = 10
    this.width = 32
    this.height = 32
    this.x = player.x
    this.y = player.y
    this.frame = 0
    this.image = new Image()
    this.image.src = 'assets/ship/rocket.png'
    setInterval(()=>{
      this.frame ++
      if(this.frame === 7) this.frame = 0
    }, 1000/12)
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
    ctx.drawImage(this.image,this.frame * 32, 0, 32, 32, this.x - this.width/2, this.y - this.height/2, this.width, this.height)
  }

  checkColissions(aliens){
    let hit = aliens.reduce((p,c,i)=>{
      if (distance(c.x, c.y, this.x, this.y) <= (this.box + c.box)) {
        if (c.alive) {
          c.kill()
          this.y = 0
          console.log('HIT')
          return true
        }
      }
    }, false)
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