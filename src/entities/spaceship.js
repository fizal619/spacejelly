import { oneUnitFromCanvas, XYCoordstoUnits } from "../utilities";

export default class Spaceship {
  constructor(color, ctx){
    const oneUnit = oneUnitFromCanvas(ctx.canvas)
    this.box = 12 * oneUnit.x
    this.x = ctx.canvas.width/2 - this.box/2
    this.y = ctx.canvas.height - (this.box + 5)
    this.image = new Image()
    this.unitX = 100
    this.unitY = 200 - 6
    this.image.src = colors[color]
    this.frame = 0
    setInterval(()=>{
      this.frame ++
      if(this.frame === 8) this.frame = 0
    }, 1000/12)
  }

  draw(ctx){
    ctx.drawImage(this.image,this.frame * 128, 0, 128, 128,this.x, this.y, this.box, this.box)
  }

  action(e, ctx){
    const oneUnit = oneUnitFromCanvas(ctx.canvas)
    const xUnitVelocity = oneUnit.x * 2
    switch(e.key){
      case 'ArrowRight':
        if((this.x + xUnitVelocity) < (ctx.canvas.width - (this.box + 1))) {
          this.x += xUnitVelocity
          this.unitX += 2
        }
        break
      case 'ArrowLeft':
        if((this.x - xUnitVelocity) > 0) {
          this.x -= xUnitVelocity
          this.unitX -= 2
        }
        break
    }
  }

  update(ctx){
    this.draw(ctx)
  }
}

const colors = {
  yellow: 'assets/ship/yellow-ship.png',
  blue: 'assets/ship/blue-ship.png',
  red: 'assets/ship/red-ship.png',
  green: 'assets/ship/green-ship.png'
}