/// <reference path="../p5.d/p5.global-mode.d.ts" />
let image_width = 400;
let image_height = 400;
function draw_background() {
    fill(93, 163, 209);
    stroke(93, 163, 209);
    beginShape();
    vertex(0, image_height / 2);
    vertex(0, 0);
    vertex(image_width / 2, -image_height / 3);
    vertex(image_width / 2, image_height / 2);
    endShape(CLOSE);
    fill(255, 108, 52);
    stroke(255, 108, 52);
    beginShape();
    vertex(0, image_height / 2);
    vertex(0, 0);
    vertex(-image_width / 2, -image_height / 3);
    vertex(-image_width / 2, image_height / 2);
    endShape(CLOSE);
    fill(51, 38, 92);
    stroke(51, 38, 92);
    beginShape();
    vertex(-image_width / 2, -image_height / 2);
    vertex(image_width / 2, -image_height / 2);
    vertex(image_width / 2, -image_height / 3);
    vertex(0, 0);
    vertex(-image_width / 2, -image_height / 3);
    endShape(CLOSE);
}
function setup() {
    createCanvas(windowWidth * .99, windowHeight * .98);
    translate(width / 2, height / 2);
    background(0);
    colors.push(color(93, 163, 209));
    colors.push(color(51, 38, 92));
    colors.push(color(255, 108, 52));
}
let colors = [];
let angle_increment = .005;
let angle = 0;
function draw() {
    translate(width / 2, height / 2);
    draw_background();
    angle += angle_increment;
    angle %= 2 * Math.PI;
    rotate(angle);
    for (let i = 0; i < 6; i++) {
        rotate(2 * Math.PI / 6);
        fill(colors[i % 3]);
        stroke(colors[i % 3]);
        beginShape();
        vertex(0, 0);
        vertex(image_width / 14, -image_height / 8);
        vertex(0, -image_height / 4);
        vertex(-image_width / 14, -image_height / 8);
        vertex(0, 0);
        endShape(CLOSE);
    }
}
//# sourceMappingURL=3color_spin.js.map