/// <reference path="../../p5.d/p5.global-mode.d.ts" />

let slash_size: number;

function setup() {
  createCanvas(windowWidth * .99, windowHeight * .98);
  background(0);
  slash_size = random(30, 120);

  strokeWeight(random(1, 3))
  stroke(255, 255, 255)
}
let w = 0;
let h = 0;
function draw(): void {
  stroke(random(100, 255), random(100, 255), random(100, 255))
  if (Math.random() > random(.1, .9))
    line(w, h, w + slash_size, h + slash_size)
  else
    line(w, h + slash_size, w + slash_size, h)
  w += slash_size
  if (w > width) {
    h += slash_size
    w = 0;
    if (h > height) {
      noLoop();
    }
  }
}
