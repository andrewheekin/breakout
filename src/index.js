import * as draw from './tutorial/1.shapes.js';
import * as move from './tutorial/2.animation.js';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// draw.drawRedRectangle(ctx);
// draw.drawGreenCircle(ctx);
// draw.drawBlueRectOutline(ctx);

move.start(ctx, canvas);
