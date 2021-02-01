/// <reference path="../../p5.d/p5.global-mode.d.ts" />

let step = .2;
let circle_radius = 400;
let particle_radius: number;
let division_count: number;
let speed: number;
let angle: number;
let slope: number;
class Particle {
  x: number;
  y: number;
  constructor(x: number, y: number, others: Particle[]) {
    this.x = x
    this.y = y
    while (
      this.inside_circle() &&
      this.inside_angle() &&
      !others
        .map(e => e.intersect(this))
        .reduce((result, current) => result || current, false)
    ) {
      this.drunk_walk();
    }

  }

  drunk_walk() {
    const direction = p5.Vector.fromAngle(random(-angle, angle) * 2, speed);
    this.x += direction.x;
    this.y += direction.y;
    this.render()
  }

  inside_angle() {
    return true;
    return this.y > 0 && this.y < slope * this.x;
  }

  inside_circle() {
    return this.x * this.x + this.y * this.y < circle_radius * circle_radius;
  }

  intersect(other: Particle) {
    return (this.x - other.x) * (this.x - other.x) + (this.y - other.y) * (this.y - other.y) < particle_radius * particle_radius;
  }

  render() {
    let to_draw = createVector(this.x, this.y)
    for (let i = 0; i < division_count; i++) {
      to_draw.rotate(angle)
      point(to_draw.x, to_draw.y)
    }
  }
}


let particles: Particle[] = []

function setup(): void {
  particle_radius = random(8, 15);
  division_count = random(4, 20);
  speed = random(10, 30);
  angle = 2 * Math.PI / division_count
  slope = Math.tan(2 * Math.PI / division_count)
  createCanvas(windowWidth * .99, windowHeight * .98);
  background(0);
  translate(width / 2, height / 2)
  rectMode(CENTER);
  ellipseMode(CENTER);
  strokeWeight(particle_radius)
  stroke(255, 255, 255)
}

function draw(): void {
  background(0)
  translate(width / 2, height / 2)
  particles.push(new Particle(0, 0, particles))
  for (let particle of particles) {
    particle.render();
  }
}
