function setup() {
  createCanvas(600, 600);
  strokeWeight(4);
  noCursor();
}

function draw() {
  fill(200,100, 200);
  rect(0, 600, 600);
  fill(240, 232, 104);
  rect(240, 80, 120, 440);
  fill(240, 232, 104);
  rect(250, 60, 100, 20);
  fill(240, 232, 104);
  rect(275, 520, 45, 200);
  fill(255, 210, 20);
  ellipse(width/2, height/2, 100, 100);
  fill(100, 0, 0);
  ellipse(width/2, height/4, 100, 100);
   fill(0, 255, 0);
  ellipse(width/2, height/1.33, 100, 100);
  line(mouseX, mouseY, pmouseX, pmouseY);
  
if (mouseIsPressed) {
  fill(0,255,0);
} else {
  fill(200,100, 200);
  rect(0, 600, 600);
}


if ((keyIsPressed == true) && (key == 'r')) {
  fill(255, 0, 0);
}else {
  fill(130, 0, 0);
}
  ellipse(width/2, height/4, 100, 100);
  
  if ((keyIsPressed == true) && (key == 'y')) {
  fill(255, 210, 20);
}else {
  fill(200, 150, 5);
}
  ellipse(width/2, height/2, 100, 100);


if ((keyIsPressed == true) && (key == 'g')) {
  fill(0, 255, 0);
}else {
  fill(0, 155, 0);
}
  ellipse(width/2, height/1.33, 100, 100) ;
  
  
  
  ellipse(mouseX, mouseY, 15, 15);
}