/// <reference path="../../p5.d/p5.global-mode.d.ts" />
let box_size = 150;
let circle_radius = 120;
function setup() {
    createCanvas(windowWidth * .99, windowHeight * .98);
    background(0);
    rectMode(CENTER);
    ellipseMode(CENTER);
    for (let i = 0; i < width / box_size - 1; i++) {
        points.push([]);
        for (let j = 0; j < height / box_size - 1; j++) {
            points[i].push([]);
        }
    }
}
let t = 0;
let time_step = 0.03;
let points = [];
function draw() {
    background(0);
    for (let i = 1; i < width / box_size - 1; i++) {
        stroke(255, 255, 255);
        ellipse(i * box_size + box_size / 2, box_size / 2, circle_radius);
        stroke(255, 0, 0);
        strokeWeight(1);
        line(i * box_size + box_size / 2 + circle_radius / 2 * cos(t * i), 0, i * box_size + box_size / 2 + circle_radius / 2 * cos(t * i), height);
        strokeWeight(10);
        point(i * box_size + box_size / 2 + circle_radius / 2 * cos(t * i), box_size / 2 + circle_radius / 2 * sin(t * i));
    }
    for (let i = 1; i < height / box_size - 1; i++) {
        stroke(255, 255, 255);
        ellipse(box_size / 2, i * box_size + box_size / 2, circle_radius);
        stroke(255, 0, 0);
        strokeWeight(1);
        line(0, i * box_size + box_size / 2 + circle_radius / 2 * sin(i * t), width, i * box_size + box_size / 2 + circle_radius / 2 * sin(i * t));
        strokeWeight(10);
        point(box_size / 2 + circle_radius / 2 * cos(t * i), i * box_size + box_size / 2 + circle_radius / 2 * sin(t * i));
    }
    for (let i = 1; i < width / box_size - 1; i++) {
        for (let j = 1; j < height / box_size - 1; j++) {
            points[i][j].push({
                x: i * box_size + box_size / 2 + cos(t * i) * circle_radius / 2,
                y: j * box_size + box_size / 2 + sin(t * j) * circle_radius / 2
            });
        }
    }
    stroke(255, 0, 0);
    strokeWeight(2);
    for (let i = 0; i < points.length; i++) {
        for (let j = 0; j < points[i].length; j++) {
            for (let k = 1; k < points[i][j].length; k++) {
                line(points[i][j][k - 1].x, points[i][j][k - 1].y, points[i][j][k].x, points[i][j][k].y);
            }
        }
    }
    t += time_step;
    if (t > Math.PI * 2) {
        noLoop();
        background(0);
        for (let i = 1; i < width / box_size - 1; i++) {
            stroke(255, 255, 255);
            ellipse(i * box_size + box_size / 2, box_size / 2, circle_radius);
        }
        for (let i = 1; i < height / box_size - 1; i++) {
            stroke(255, 255, 255);
            ellipse(box_size / 2, i * box_size + box_size / 2, circle_radius);
        }
        for (let i = 1; i < width / box_size - 1; i++) {
            for (let j = 1; j < height / box_size - 1; j++) {
                points[i][j].push({
                    x: i * box_size + box_size / 2 + cos(t * i) * circle_radius / 2,
                    y: j * box_size + box_size / 2 + sin(t * j) * circle_radius / 2
                });
            }
        }
        stroke(255, 0, 0);
        strokeWeight(2);
        for (let i = 0; i < points.length; i++) {
            for (let j = 0; j < points[i].length; j++) {
                for (let k = 1; k < points[i][j].length; k++) {
                    line(points[i][j][k - 1].x, points[i][j][k - 1].y, points[i][j][k].x, points[i][j][k].y);
                }
            }
        }
    }
}
//# sourceMappingURL=index.js.map