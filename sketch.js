let angle = 0;
let mic;
let left = 100;

function setup() {
    createCanvas(780, 600, WEBGL);
  mic = new p5.AudioIn();
  mic.start();
  

}

function draw() {
  background(0);
  micLevel = mic.getLevel();

  rectMode(CENTER);
  noStroke();
  fill(0, 0, 255);
  normalMaterial()
  //translate(0, 0, mouseX);
 rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.2);
  //rect(0, 0, 150, 150);
  let x = constrain(left - micLevel * -height * 1, 1, 400);
  torus(x,40 );

  angle += 0.07;
}