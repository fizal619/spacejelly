import { oneUnitFromCanvas, XYCoordstoUnits } from "../utilities";

export default class Spaceship {
  constructor(color, ctx){
    const oneUnit = oneUnitFromCanvas(ctx.canvas)
    this.box = 12 * oneUnit.x
    this.x = oneUnit.x * 94
    this.y = (oneUnit.y * 200) - (this.box + 10)
    this.image = new Image()
    this.unitX = 100
    this.unitY = 200 - 6
    this.image.src = colors[color]
    this.frame = 0
    setInterval(()=>{
      this.frame ++
      if(this.frame === 9) this.frame = 0
    }, 1000/12)
  }

  draw(ctx){
    ctx.drawImage(this.image,this.frame * 32, 0, 32, 32,this.x, this.y, this.box, this.box)
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
  yellow: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAAgCAYAAACy9KU0AAAD30lEQVR4Xu2dwbXUMAxFE1YsOVRDAyzpgBIohxLogCUN/Go4LFkRjpPvfMexLcnWzBD+neVEtjLPT8+yrWTmaeyzPDefx7rpbo3/DTrw76bQUEP4N8i/UeIyAIMDMET/aQJ/8L/0BNQrQJH4efz09meNQ/yXEQN/K5P67OGfE/96Cbv8enp7uIV3H37fU4nxD/7wL0HgqvGHAHXOgAgwE1BKnasKQB/9J7cEYEiAnkGfQjA+YgDwv2ad4A//Lht/CFDfFLDOAAggAsgEMDYBIkAIUA8CCDATkMsEXBMg6XjXSkCpvzwIJHv82wJAwhP8jwhIeME/J/6VBCg/YizaGJYgmv7S4dfYWwig6Q//Lwho8AJ/fQBq8Hy1/CuKy7JsmM3zenlYgBT9HQZAYW8KAEV/+E8ESIEX+BsESIHnq+UfAnTeAVkUhCEACUDtHoiGTwhQgoAmZTQFYBbj0sY3/o+ADWeg4H9AAP61jx3uGn9Vcod7bNT2WAqRdltlrZDGHv/6SmgNnocZOBZZMv7V6n7458S/HgFaFbJSCVzaM/IOAPyDP/wrC8Dl4k9zCnZK2HLxiQaxME8oLLGmwPjPEAD/42Mg8G9D4Irxl4tBMbsQBEV9OQGoWX9UCzC1o4oh/rfK5cb7gxj/QnY5yruCQML/AhHV5KsprUY4GiKAfyX5wX8X0oM2wL9yZpiC9K/FX1RidfDHVC8eVe9T6jyf1uW1maMAAv6V4gP+21ID/h0Pq0LNnkaAs6Xaw+M/3IAp+D0CoLRe1YKH//EABP/zfgn8k7OndCk5MgGk/FsFyAp+6KB0A+H7nr562uD/PAOCP/zriaWeNl7xZxYgrwwkVUELAPj3yYDA/yULgn/67Mc7/hAgY9bmPQDWrAX/CPDoHlh+KvdIAe4WoNIGc88P6Q1A/J8RAH/7TA7/bMvW0v5hZGIP/7oEqHa6Zf0+faOgta2HPf5f3mjogae1D/AH//0UrJVRlOpOGo9i7F1lzxRZ+blvaOP/XPcC/sWX4h84Bv82jJQV0qf4bOHnxb9qRabwrw/S/yJZHtYrCZPUHv9lOd/rOgb/tQP82w9bwj8n/vUKkJTNSASmfRsB8GsIwM8vn5Y3n38cEPzz7eP0/uv3uwgw/v3wl94JnYeJ9CBptJdmCFGAKgb4l5Dbrv/X+AcBCD8yilAQn/BJBeiW/MG/H/7agNbRHisQcEAgzzCy7Gb1kNpI14N9yaZ2q/g/ZjgSvtL1Fv4IkEPA0IU/AlEEasIhCVAqUhbxib8E/5sI3Rp/BMg/dujRCYEgAsmy6tRrXApJNq3rrVvF/+3x/wsynIKS5oOG4gAAAABJRU5ErkJggg==",
  blue: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAAgCAYAAACy9KU0AAAD4ElEQVR4Xu2dQZLUMAxFE1asuRNLDkAVR+AILDkCR6CKA8ySO7FmRSgn44zj2JZkq7sJ83rZka3099e3bCvpeRr7LM/N57Fuulvjf4MO/LspNNQQ/g3yb5S4DMDgAAzRf5rAH/wvPQH1ClAkfh4/vf1Z4xD/ZcTA38qkPnv458S/XsIub7/8ONzC768f76nE+Ad/+JcgcNX4Q4A6Z0AEmAkopc5VBaCP/pNbAjAkQM+gTyEYHzEA+F+zTvCHf5eNPwSobwpYZwAEEAFkAhibABEgBKgHAQSYCchlAq4JkHS8ayWg1F8eBJI9/m0BIOEJ/kcEJLzgnxP/SgKUHzEWbQxLEE1/6fBr7C0E0PSH/xcENHiBvz4ANXi+Wv4VxWVZNszmeb08LECK/g4DoLA3BYCiP/wnAqTAC/wNAqTA89XyDwE674AsCsIQgASgdg9EwycEKEFAkzKaAjCLcWnjG/9HwIYzUPA/IAD/2scOd42/KrnDPTZqeyyFSLutslZIY49/fSW0Bs/DDByLLBn/anU//HPiX48ArQpZqQQu7Rl5BwD+wR/+lQXgcvGnOQU7JWy5+ESDWJgnFJZYU2D8ZwiA//ExEPi3IXDF+MvFoJhdCIKivpwA1Kw/qgWY2lHFEP9b5XLj/UGMfyG7HOVdQSDhf4GIavLVlFYjHA0RwL+S/OC/C+lBG+BfOTNMQfrX4i8qsTr4Y6oXj6r3KXWeT+vy2sxRAAH/SvEB/22pAf+Oh1WhZk8jwNlS7eHxH27AFPweAVBar2rBw/94AIL/eb8E/snZU7qUHJkAUv6tAmQFP3RQuoHwfU9fPW3wf54BwR/+9cRSTxuv+DMLkFcGkqqgBQD8+2RA4P+SBcE/ffbjHX8IkDFr8x4Aa9aCfwR4dA8sP5V7pAB3C1Bpg7nnh/QGIP7PCIC/fSaHf7Zla2n/MDKxh39dAlQ73bJ+n75R0NrWwx7/L2809MDT2gf4g/9+CtbKKEp1J41HMfausmeKrPzcN7Txf657Af/iS/EPHIN/G0bKCulTfLbw8+JftSJT+NcH6X+RLA/rlYRJao//spzvdR2D/9oB/u2HLeGfE/96BUjKZiQC076NAPg1BODX5w/Lm08/Dwj++f5+evft6S4CjH8//KV3QudhIj1IGu2lGUIUoIoB/iXktuv/Nf5BAMKPjCIUxCd8UgG6JX/w74e/NqB1tMcKBBwQyDOMLLtZPaQ20vVgX7Kp3Sr+jxmOhK90vYU/AuQQMHThj0AUgZpwSAKUipRFfOIvwf8mQrfGHwHyjx16dEIgiECyrDr1GpdCkk3reutW8X97/P8CmjOCkq5z/U0AAAAASUVORK5CYII=",
  red: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAAgCAYAAACy9KU0AAAD2UlEQVR4Xu2dwXnbMAyFrY7QnXrMBh0h43SEbtBjd8oIVT9KpkxSJAGQSFw1f44RRMiPDw8gCdnLbe5vvd++zA0zfDf+d+jAf5hCUzfCv0n+zRKXCZicgCn6327gD/6XTkCjAhSJX8bP6HjWOMR/HTHwtzJpzB7+OfFvlLDr2+tL9ghff/z6SCXGP/jDvwSBq8YfAjSYARFgElBKnasKwBj9b24FwJQA3UG/hWB8xgTgf6s6wR/+XTb+EKCxFLBlAAQQASQBzCVABAgBGkEAASYBuSTglgBJx7tWAkrjlUEg2ePfFgASnuCfIyDhBf+c+FcToPKIsWpjWIJoxkunX2NvIYBmPPw/ENDgBf76ANTg+Wn5VxWXdd0xW5bt8rQAKcbLJkBhbwoAxXj4TwRIgRf4GwRIgeen5R8CdN4BWRWEIQAJQO0eiIZPCFCCgKZkNAVgEePSxjf+c8CmK1DwzxCAf/1jhw+Nvya5wzN2enssjUiHrbJXSGOPf30ntAbPLAPHJkvmv9ndD/+c+DciQJtCNjqBa3tG3gGAf/CHf3UBuFz8aU7BTgVbKT7RIDbmCY0l1hIY/wUC4J+/BgL/dgSuGH+lGFSrC0FQ1JcTgLr9R60AUztqGOJ/71zufH8Q81+pLmd5VxFI+F8hopp8LaXVCEdHBPCvJD/4H0KaaQP8q1eGKUj/WvxFJVYHfyz14lH1kVKX5bQub2WOCgj4V4oP+O9LDfiXH1aFnj2NABdLtafHf3gAU/B7BEBtvaoFD//zAQj+5/0S+CdXT+lSciYBpPzbBMgKfhig9gDh/yNjjdyD/3MGBH/4NxJLI/d4xZ9ZgLwqkFQFLQDg36cCAv9HFQT/9NWPd/whQMaqzXsCrFUL/hHg2T2w8lTumQI8LEC1DeaRDzIagPg/IwD+9kwO/2zL1tr+YWTiCP+GBKh1umX9f/qNgtZ7Pezx//hGQw88rWOAP/gfp2C9iqLWd9J5FeMYqninyMrPY0Mb/+e+F/Cvfil+xjH4t2Ok7JA+xWcPPy/+NTsyhV99kH4XyfKyXk2YpPvxX5fzo69j8lc7wL//siX8c+LfqABJ1YxEYO7vIwB+HQF4e31Zv3z/nSH45+e3kOk/RIDx74e/9J3QZZhIL5JGeylDiALUMMC/hNx+/b/GPwhA+JBRhIL43JcaWWdvBSoX/uDfD3/thOhojxUIOCBQVhhFdbN5SG2k68G+ZtN6VPznFY6Er3S9hz8C5BAwDOGPQBSBlnBIApSKlEV84ifB/y5C740/AuQfO4zohEAQgWRf5zRqXApJNr3rvUfF//vj/xdoEIKSdpzhqwAAAABJRU5ErkJggg==",
  green: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAAgCAYAAACy9KU0AAAD3klEQVR4Xu2dwZnUMAyFE0qgEg60wJEO6ADKgQ7ogOO2wIFKKIHwOVlnHce2JFszQ9h/jhPZyjw/Pcu2kpmnsc/y3Hwe66a7Nf436MC/m0JDDeHfIP9GicsADA7AEP2nCfzB/9ITUK8AReLn8dPbnzUO8V9GDPytTOqzh39O/Osl7PLu8/vDLfz69vOeSox/8Id/CQJXjT8EqHMGRICZgFLqXFUA+ug/uSUAQwL0DPoUgvERA4D/NesEf/h32fhDgPqmgHUGQAARQCaAsQkQAUKAehBAgJmAXCbgmgBJx7tWAkr95UEg2ePfFgASnuB/REDCC/458a8kQPkRY9HGsATR9JcOv8beQgBNf/h/QUCDF/jrA1CD56vlX1FclmXDbJ7Xy8MCpOjvMAAKe1MAKPrDfyJACrzA3yBACjxfLf8QoPMOyKIgDAFIAGr3QDR8QoASBDQpoykAsxiXNr7xfwRsOAMF/wMC8K997HDX+KuSO9xjo7bHUoi02yprhTT2+NdXQmvwPMzAsciS8a9W98M/J/71CNCqkJVK4NKekXcA4B/84V9ZAC4Xf5pTsFPClotPNIiFeUJhiTUFxn+GAPgfHwOBfxsCV4y/XAyK2YUgKOrLCUDN+qNagKkdVQzxv1UuN94fxPgXsstR3hUEEv4XiKgmX01pNcLREAH8K8kP/ruQHrQB/pUzwxSkfy3+ohKrgz+mevGoep9S5/m0Lq/NHAUQ8K8UH/Dflhrw73hYFWr2NAKcLdUeHv/hBkzB7xEApfWqFjz8jwcg+J/3S+CfnD2lS8mRCSDl3ypAVvBDB6UbCN/39NXTBv/nGRD84V9PLPW08Yo/swB5ZSCpCloAwL9PBgT+L1kQ/NNnP97xhwAZszbvAbBmLfhHgEf3wPJTuUcKcLcAlTaYe35IbwDi/4wA+NtncvhnW7aW9g8jE3v41yVAtdMt6/fpGwWtbT3s8f/yRkMPPK19gD/476dgrYyiVHfSeBRj7yp7psjKz31DG//nuhfwL74U/8Ax+LdhpKyQPsVnCz8v/lUrMoV/fZD+F8nysF5JmKT2+C/L+V7XMfivHeDfftgS/jnxr1eApGxGIjDt2wiAX0MAfn/5uLz59HRA8M/3D9Pbrz/uIsD498Nfeid0HibSg6TRXpohRAGqGOBfQm67/l/jHwQg/MgoQkF8wicVoFvyB/9++GsDWkd7rEDAAYE8w8iym9VDaiNdD/Ylm9qt4v+Y4Uj4Stdb+CNADgFDF/4IRBGoCYckQKlIWcQn/hL8byJ0a/wRIP/YoUcnBIIIJMuqU69xKSTZtK63bhX/t8f/L6ahgpJht9qtAAAAAElFTkSuQmCC"
}