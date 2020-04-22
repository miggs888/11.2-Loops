var circleX = 400;
var circleY = 325;
var x = random(30, 200);
var y = random(30, 200);

function setup() {
  createCanvas(800, 650);
}

function draw() {
    ellipse(375, 300, random(mouseX / 2, mouseY / 2));
    fill(random(0, 255));
}
