let carX = 50;
let yeeee;


function setup() {
  createCanvas(500, 500);

  yeeee = new p5.Oscillator('square');
  yeeee.start();

  //draw race car wheels
  //fill(0);
  //stroke(250);
  //strokeWeight(4);
  //ellipse(60, 330, 20, 20);
  //ellipse(90, 330, 20, 20);

  carX = 50;

}

function draw() {
  console.log(frameCount);

  background(250, 200, 250);

  if (frameCount > 180) {

    yeeee.freq(carX);

    if (carX > 500) {
      carX = -50;
    } else if (carX > 400) {
      carX += 6;
    } else {
      //x = x + 3; speed at the end of the car
      carX += 3;
    }

    //draw race car body
    noStroke()
    fill(40, 50, 250);
    rect(carX, 300, 65, 30, 30);

    noStroke()
    fill(40, 50, 250);
    rect(carX + 15, 280, 30, 30, 20, 10);

    //wheels
    fill(0);
    stroke(250);
    strokeWeight(4);
    ellipse(carX + 10, 330, 20, 20);
    ellipse(carX + 50, 330, 20, 20);
  }
}

//clcking anywhere will restart the moving object
function mousePressed() {
  carX = 0;
  yeeee.stop();
}
