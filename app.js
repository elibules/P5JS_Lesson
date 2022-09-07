let circles = [];

function setup() {
  createCanvas(600, 600);
}

function mouseClicked() {
  // cancels the function before it can push a new circle to the array if one of the circles's
  // 'active' property is set true
  for (let i = 0; i < circles.length; i++) {
    if (circles[i].active == true) {
      return false;
    }
  }

  circles.push({
    x: mouseX,
    y: mouseY,
    color: {
      r: random(255),
      g: random(255),
      b: random(255),
    },
    active: false,
  });
}

function drawCircles() {
  for (let i = 0; i < circles.length; i++) {
    noStroke();
    fill(circles[i].color.r, circles[i].color.g, circles[i].color.b);
    circle(circles[i].x, circles[i].y, 20);
    if (i > 0) {
      for (let r = 0; r < circles.length; r++) {
        stroke(100);
        line(circles[i].x, circles[i].y, circles[r].x, circles[r].y);
      }
    }
  }
}

// runs if the mouse is being pressed
function mousePressed() {
  // loops through the circles array and sets a circle active if the mouse coords
  // are within it's radius
  for (let i = 0; i < circles.length; i++) {
    // measures distance between mouse and circle coords
    distance = dist(mouseX, mouseY, circles[i].x, circles[i].y);
    if (distance < 20) {
      circles[i].active = true;
    } else {
      circles[i].active = false;
    }
  }
}

// runs while mouse is being dragged
function mouseDragged() {
  // loops through circle array and actively changes the circle's x and y
  // if it's 'active' property is true
  if (circles.length > 0) {
    for (let i = 0; i < circles.length; i++) {
      let circle = circles[i];
      if (circle.active) {
        circle.x = mouseX;
        circle.y = mouseY;
        break;
      }
    }
  }

  return false;
}

function draw() {
  clear();
  background(200);
  drawCircles();
}
