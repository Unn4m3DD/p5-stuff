/// <reference path="../../p5.d/p5.global-mode.d.ts" />
let current_gen = [];
let next_gen = [];
let simulation_width = 100;
let simulation_height = 100;
let dA = 1;
let dB = .5;
let feed = .055;
let kill = .062;
let time_scale = 1;
function setup() {
    createCanvas(windowWidth * .99, windowHeight * .98);
    colorMode(HSB);
    translate(width / 2 - simulation_width / 2, height / 2 - simulation_height / 2);
    for (let x = 0; x < simulation_width; x++) {
        current_gen[x] = [];
        for (let y = 0; y < simulation_height; y++) {
            current_gen[x].push({ a: 1, b: 0 });
        }
    }
    for (let z = 0; z < 10; z++) {
        let rand_x = floor(random(3, simulation_width - 3));
        let rand_y = floor(random(3, simulation_height - 3));
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                current_gen[rand_x + x][rand_y + y] = { a: 0, b: 1 };
            }
        }
    }
    next_gen = JSON.parse(JSON.stringify(current_gen));
}
let counter = 0;
function draw() {
    translate(width / 2 - simulation_width / 2, height / 2 - simulation_height / 2);
    counter++;
    if (counter % 50 == 0) {
        background(0, 0, 0);
        for (let x = 0; x < simulation_width; x++)
            for (let y = 0; y < simulation_height; y++) {
                stroke(0, 0, floor(current_gen[x][y].a * 255) - floor(current_gen[x][y].b * 255));
                point(x, y);
            }
    }
    next();
}
function next() {
    let x2 = current_gen.map(array => array.map(e => ({ a: e.a * .2, b: e.b * .2 })));
    let x5 = current_gen.map(array => array.map(e => ({ a: e.a * .05, b: e.b * .05 })));
    function nabla(arg, x, y) {
        let result = -current_gen[x][y][arg];
        result += x2[x - 1][y][arg];
        result += x2[x][y - 1][arg];
        result += x2[x + 1][y][arg];
        result += x2[x][y + 1][arg];
        result += x5[x - 1][y - 1][arg];
        result += x5[x - 1][y + 1][arg];
        result += x5[x + 1][y - 1][arg];
        result += x5[x + 1][y + 1][arg];
        return result;
    }
    for (let x = 1; x < simulation_width - 1; x++)
        for (let y = 1; y < simulation_height - 1; y++) {
            let a = current_gen[x][y].a;
            let b = current_gen[x][y].b;
            next_gen[x][y].a = a + (dA * nabla("a", x, y) - a * b * b + feed * (1 - a)) * time_scale;
            next_gen[x][y].b = b + (dB * nabla("b", x, y) + a * b * b - (kill + feed) * b) * time_scale;
        }
    let tmp = current_gen;
    current_gen = next_gen;
    next_gen = tmp;
}
//# sourceMappingURL=index.js.map