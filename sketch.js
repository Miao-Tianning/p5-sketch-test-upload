var x = 50;
var y = 150;
var r = 255;
var g = 0;
var b = 255;
var mouse_drag = false;

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(255, 204, 30);

  fill(r,g,b);
  if(mouse_drag) {
    ellipse(mouseX,mouseY,80,80);
  } else {
    ellipse(x,y,80,80);
  }

}

function keyPressed() {
 if(key == ' ') fullscreen(true);
}

function mousePressed() {
  g = 120;
  print("mousePressed()");  
}

function mouseDragged() {
  mouse_drag = true;
  print("mouseDragged()");
}

function mouseReleased() {
  g = 0;
  mouse_drag = false;
  print("mouseReleased()");
  x = mouseX;
  y = mouseY;  
}


