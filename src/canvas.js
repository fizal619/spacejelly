// Initial Setup
import './main.scss'
import Spaceship from './entities/spaceship';
import { Star } from './entities/star';
let canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

function canvasSize(canvas) {
  let x
  if(innerHeight < innerWidth) {
    x = innerHeight
    canvas.width = x 
    canvas.height = x
  } else {
    x = innerWidth
    canvas.width = x
    canvas.height = x 
  }
  return canvas
}

canvas = canvasSize(canvas)

// Variables
const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['red', 'blue', 'yellow', 'green']

// Event Listeners
// addEventListener('mousemove', event => {
//     mouse.x = event.clientX
//     mouse.y = event.clientY
// })

addEventListener('resize', () => {
  canvas = canvasSize(canvas)
  
  animate()
})

// Utility Functions
export function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1
  
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

// Implementation
let player
let stars = []
const state = {
  player: {
    x: canvas.height/2,
    y: canvas.width/2
  }
} 

addEventListener('keydown', (e)=>{
  player.action(e, c)
})

function init() {
  for (let i = 0; i < 100; i++) {
    stars.push(new Star(c))
  }
  player = new Spaceship(randomColor(colors), c)
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  for (let i = 0; i < stars.length; i++) {
    stars[i].update(c)
  }
  player.update(c)
 
}

init()
animate()