var song;

function preload() {
  song = loadSound("youth.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(220);
  background("red");
}

function draw() {
  noStroke;
  fill("#FFFFFF");
  textAlign(CENTER);
  textSize(28);
  text("click for sound on / off", width / 2, height / 2);

  noFill();

  let changeColor = lerpColor(color("red"), color("blue"), frameCount / 150);

  stroke(changeColor);
  translate(frameCount * 2, height / 2);
  circle(0, 0, 1000);

  translate(-frameCount * 4, 0);
  circle(width, 0, 1000);

  if (frameCount === 1000) {
    noLoop();
  }
}

function mouseClicked() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
