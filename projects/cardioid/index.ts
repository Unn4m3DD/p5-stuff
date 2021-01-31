/// <reference path="../../p5.d/p5.global-mode.d.ts" />

let radius = 350;
let n_parts = 500;
let m_interval = 3;
let points: p5.Vector[] = [];
function mouseWheel(event): void {
  m_interval += -1 * Math.sign(event.delta)
  if (m_interval < 1) m_interval = 1;
  setup();
}

function setup(): void {
  createCanvas(windowWidth * .99, windowHeight * .98)
  background(0)
  translate(width / 2, height / 2)
  ellipseMode(CENTER)
  ellipse(0, 0, radius * 2)
  for (let i = 0; i < n_parts; i++) {
    points.push(p5.Vector.mult(p5.Vector.fromAngle(radians(360 / n_parts * i)), radius))
  }
  for (let i = 0; i < n_parts; i++) {
    line(points[i].x, points[i].y, points[(i * m_interval) % n_parts].x, points[(i * m_interval) % n_parts].y);
  }
}

function draw(): void {
}
