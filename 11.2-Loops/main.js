var cwidth = 800
var cheight = 650
var row = 10;

function setup() {
  createCanvas(cwidth, cheight);
  for (x = 0; x <= cwidth; x += row) {
    for (y = 0; y <= cheight; y += row) {
      stroke(x - 100);
      if ( y % 3 === 0) {
        fill('pink');
        ellipse(((random(x, x+30))+(random(1, 10))), (y + row), (random(1, 45)));
      }
      else {
        fill((random(190, 255)),(random(120, 255)),(random(0, 3)));
        ellipse((x+4), y, 10, row);
      }
    }
  }
}
setTimeout(function() { alert("Hit 'refresh' on your browser to shake things up!"); }, 2500);