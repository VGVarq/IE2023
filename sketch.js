function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let birds = [];
let numBirds = 50;

function setup() {
  createCanvas(500, 500);
  for (let i = 0; i < numBirds; i++) {
    birds.push(new Bird(random(width), random(height)));
  }
}

function draw() {
  clear();
  
  for (let bird of birds) {
    bird.update();
    bird.display();
  }
}

class Bird {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.velocity.mult(random(2, 4));
    this.acceleration = createVector();
    this.maxForce = 0.1;
    this.maxSpeed = 4;
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.acceleration.mult(0);
    
    // Wrapping around the canvas
    if (this.position.x > width) this.position.x = 0;
    if (this.position.x < 0) this.position.x = width;
    if (this.position.y > height) this.position.y = 0;
    if (this.position.y < 0) this.position.y = height;
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  display() {
    let angle = this.velocity.heading() + HALF_PI;
    fill(0);
    noStroke();
    push();
    translate(this.position.x, this.position.y);
    rotate(angle);
    beginShape();
    vertex(0, -12);
    vertex(-6, 8);
    vertex(6, 8);
    endShape(CLOSE);
    pop();
  }
}
const countdownDate = new Date("2023-12-31T23:59:59").getTime(); // Fecha objetivo

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${hours}:${minutes}:${seconds}`;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "¡Tiempo terminado!";
    }
}, 1000);

