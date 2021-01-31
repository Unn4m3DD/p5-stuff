/// <reference path="../../p5.d/p5.global-mode.d.ts" />
let box_size = 150;
let circle_radius = 120;
function setup() {
    createCanvas(windowWidth * .99, windowHeight * .98);
    background(0);
    rectMode(CENTER);
    ellipseMode(CENTER);
}
let t = 0;
let time_step = 0.01;
function draw() {
    for (let i = 1; i < width / box_size - 1; i++) {
        stroke(255, 255, 255);
        ellipse(i * box_size + box_size / 2, box_size / 2, circle_radius);
        stroke(255, 0, 0);
        //line(i * box_size + box_size / 2 + circle_radius / 2 * cos(t * i), 0, i * box_size + box_size / 2 + circle_radius / 2 * cos(t * i), height)
    }
    for (let i = 1; i < height / box_size - 1; i++) {
        stroke(255, 255, 255);
        ellipse(box_size / 2, i * box_size + box_size / 2, circle_radius);
        stroke(255, 0, 0);
        //line(0, i * box_size + box_size / 2 + circle_radius / 2 * sin(i * t), width, i * box_size + box_size / 2 + circle_radius / 2 * sin(i * t))
    }
    for (let i = 1; i < width / box_size - 1; i++) {
        for (let j = 1; j < height / box_size - 1; j++) {
            stroke(255, 0, 0);
            strokeWeight(2);
            line(i * box_size + box_size / 2 + cos(t * i) * circle_radius / 2, j * box_size + box_size / 2 + sin(t * j) * circle_radius / 2, i * box_size + box_size / 2 + cos((t + time_step) * i) * circle_radius / 2, j * box_size + box_size / 2 + sin((t + time_step) * j) * circle_radius / 2);
        }
    }
    t += time_step;
    if (t > Math.PI * 2)
        noLoop();
}
//# sourceMappingURL=index.js.map