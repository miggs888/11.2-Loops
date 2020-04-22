let typewriter;

function preload() {
    typewriter = loadFont('fonts/Old_typewriter2.0.ttf');
  }
function setup() {
  createCanvas(windowWidth, windowHeight);
  fill('white');
  textFont(typewriter);
}

function draw() {
    background('black');
  // the 'shear' function skews the rectangle
    shearX(QUARTER_PI / mouseX * 1.5);
    shearY(PI / mouseY * 6);
        text('I have been one acquainted with the night.', 30, 100);
        text('I have walked out in rain—and back in rain.', 30, 120);
        text('I have outwalked the furthest city light.', 30, 140);
    shearX(QUARTER_PI / mouseX * 6);
    shearY(PI / mouseY * 5);
        text('I have looked down the saddest city lane.', 30, 180);
        text('I have passed by the watchman on his beat', 30, 200);
        text('And dropped my eyes, unwilling to explain.', 30, 220);
    shearX(QUARTER_PI / mouseX * 5);
    shearY(PI / mouseY * 4);
        text('I have stood still and stopped the sound of feet', 30, 260);
        text('When far away an interrupted cry', 30, 280);
        text('Came over houses from another street,', 30, 300);
    shearX(QUARTER_PI / mouseX * 4);
    shearY(PI / mouseY * 3);
        text('But not to call me back or say good-bye;', 30, 340);
        text('And further still at an unearthly height,', 30, 360);
        text('One luminary clock against the sky', 30, 380);
    shearX(QUARTER_PI / mouseX * 3);
    shearY(PI / mouseY * 2);
        text('Proclaimed the time was neither wrong nor right. ', 30, 420);
        text('I have been one acquainted with the night', 30, 440);
        text('-By Robert Frost', 300, 500);
}
