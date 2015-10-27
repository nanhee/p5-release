// for red, green, and blue color values
var r, g, b;

function setup() {
  createCanvas(700, 600);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(255);
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(150, 100, 150, 150);

  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(370, 100, 150, 150);

  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(600, 100, 150, 150);

  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(150, 300, 150, 150);

  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(370, 300, 150, 150);

  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(600, 300, 150, 150);
  
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(150, 500, 150, 150);

  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(370, 500, 150, 150);

  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(600, 500, 150, 150);

  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(150, 700, 150, 150);

  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(370, 700, 150, 150);

  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(600, 700, 150, 150);
}
// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 150, 100);
  if (d < 50) {
    // Pick new random color values
    r = (204);
    g = (255);
    b = (255);
}
  // Check if mouse is inside the circle
  var q = dist(mouseX, mouseY, 400, 100);
  if (q < 50) {
    // Pick new random color values
    r = (255);
    g = (204);
    b = (204);
  }
  
  // Check if mouse is inside the circle
  var w = dist(mouseX, mouseY, 600, 100);
  if (w < 50) {
    // Pick new random color values
    r = (204);
    g = (255);
    b = (255);
  }
  
  // Check if mouse is inside the circle
  var e = dist(mouseX, mouseY, 150, 300);
  if (e < 50) {
    // Pick new random color values
    r = (255);
    g = (255);
    b = (204);
  }
  
  // Check if mouse is inside the circle
  var t = dist(mouseX, mouseY, 400, 300);
  if (t < 150) {
    // Pick new random color values
    r = (255);
    g = (204);
    b = (204);
  }
  
  // Check if mouse is inside the circle
  var y = dist(mouseX, mouseY, 600, 300);
  if (y < 150) {
    // Pick new random color values
    r = (204);
    g = (255);
    b = (204);
  }
}
