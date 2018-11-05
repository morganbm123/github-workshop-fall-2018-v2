/*
The parabolicEffect function creates the shapes at different 
points mapped to the various parabolic functions.
There is an offset of i or j added to each shape that 
give speed and tracing effects

*/
function parabolicEffect() {


  //map the cursor movement to the number of lines on screen
  let deltaX = map(mouseX, 0, width, 0, trans.numLines);

  //check to see if the rectangle checkbox is true or not
  if (rectCheckbox.checked()) {

    //create the rectangle shape and add in the offset of i 
    for (let i = 0; i < deltaX; i++) {
      noFill();
      stroke(111, 195, 223, 50 + (i * 4));
      rect(x(t + i), y(t + i), x1(t + i), y1(t + i));
      rect(x1(t + i), y(t + i), x(t + i), y1(t + i));

    }
    //create the rectangle shape and add in the offset of j
    for (let j = 5; j < deltaX * 2; j++) {
      stroke(218, 112, 214, 50 + (j * 4));
      rect(x(t - j), y(t - j), x1(t - j), y1(t - j));
      rect(x(t - j), y1(t - j), x1(t - j), y(t - j));

    }
  } else {

    //create the lines and add in the offset of i
    for (let i = 0; i < deltaX; i++) {
      noFill();
      stroke(111, 195, 223, 50 + (i * 4));
      line(x(t + i), y(t + i), x1(t + i), y1(t + i));
      line(x1(t + i), y(t + i), x(t + i), y1(t + i));

    }

    //create the lines and add in the offset of j
    for (let j = 5; j < deltaX * 2; j++) {
      //  fill(218, 112, 214, 50);
      stroke(218, 112, 214, 50 + (j * 4));
      line(x(t - j), y(t - j), x1(t - j), y1(t - j));
      line(x(t - j), y1(t - j), x1(t - j), y(t - j));

    }
  }
}