export const drawRedRectangle = ctx => {
  // start a drawing with beginPath()
  ctx.beginPath();
  // rect(topLeftX, topLeftY, width, height)
  ctx.rect(20, 40, 50, 100);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  // end a drawing with closePath()
  ctx.closePath();
}

export const drawGreenCircle = ctx => {
  ctx.beginPath();
  // arc(centerX, centerY, radius, start angle in radians, end angle in radians,
  //     direction of drawing - false is clockwise and true is counterclockwise)
  ctx.arc(240, 160, 20, 0, Math.PI*2, false);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

export const drawBlueRectOutline = ctx => {
  ctx.beginPath();
  ctx.rect(160, 10, 100, 40);
  ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
  // stroke() will only draw the shape's border
  ctx.stroke();
  ctx.closePath();
}
