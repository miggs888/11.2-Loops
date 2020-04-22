function setup() {
  createCanvas(800, 650);
}
function draw() {
    background(60, 100, 75);
    // rect 1
    scale (mouseX / 350, mouseY / 400);
    rect(20, 20, 200, 200);
    fill ("white");

    // rect 2 
    scale (mouseX / 350, mouseY / 400);
    rect(300, 100, 200, 200);
    fill ("yellow");

    // rect 3
    scale (mouseX / 350, mouseY / 400);
    rect(500, 250, 200, 200);
    fill ("yellow");
    
}