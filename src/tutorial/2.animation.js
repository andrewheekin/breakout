export const start = (ctx, canvas) => {
  let x = canvas.width / 2;
  let y = canvas.height - 30;

  let dx = 2;
  let dy = -2;

  const ballRadius = 10

  const drawBall = () => {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
  }

  const draw = () => {
    // clear the canvas before each paint
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();

    // reverse ball X or Y direction if side is reached
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) dx = -dx;
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) dy = -dy;

    // add the motion to the x and y coords
    x += dx;
    y += dy;
  };

  setInterval(draw, 10);
};
