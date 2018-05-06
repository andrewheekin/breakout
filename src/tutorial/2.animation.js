export const start = (ctx, canvas) => {
  let x = canvas.width / 2;
  let y = canvas.height - 30;

  let dx = 2;
  let dy = -2;

  const drawBall = () => {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
  }

  const draw = () => {
    // clear the canvas before each paint
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();

    // add the motion to the x and y coords
    x += dx;
    y += dy;
  };

  setInterval(draw, 10);
};