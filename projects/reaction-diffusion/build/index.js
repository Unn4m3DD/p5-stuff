/// <reference path="../../p5.d/p5.global-mode.d.ts" />
let current_gen = [];
let next_gen = [];
function setup() {
    createCanvas(windowWidth * .99, windowHeight * .98);
    for (let x = 0; x < windowWidth; x++) {
        let inner_array = [];
        for (let y = 0; y < windowWidth; y++) {
            inner_array.push({ a: 0, b: 0 });
        }
        current_gen.push(inner_array);
    }
    next_gen = JSON.parse(JSON.stringify(current_gen));
}
function draw() {
}
//# sourceMappingURL=index.js.map