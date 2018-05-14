export const oneUnitFromCanvas = (canvas) => {
  const x = canvas.height / 200
  const y = canvas.width / 200
  return {x, y}
}

export const unitCoordsToXY = (units, canvas) => {
  const oneUnit = oneUnitFromCanvas(canvas)
  return {
    x: units.x * oneUnit.x,
    y: units.y * oneUnit.y
  }
}

export const XYCoordstoUnits = (xy, canvas) => {
  const oneUnit = oneUnitFromCanvas(canvas)  
  return {
    x: xy.x / oneUnit.x,
    y: xy.y / oneUnit.y
  }
}