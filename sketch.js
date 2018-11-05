/*

ICM Homework 4, 10/01/18

This weeks ICM Homework took inspiration on computer art from 
John Whitney. 

-As the user scrolls their mouse across the 
screen, the number of lines being created from the moving 
objects increases.

-When the user clicks the screen the shapes invert

-Finally, the checkbox at the top left of the screen the shape
changes from a line to a rectangle.

*/


let t = 0;
let divOne;
//object to translate the start point of the lines 
//and set basic functionality

let trans = {
  numLines: 25,
  x: 2,
  y: 2,
};

function setup() {
  createCanvas(600, 600);
  background(0);


  //create a checkbox for changing the shape to rectangles
  rectCheckbox = createCheckbox('rectangles', false);
  rectCheckbox.changed(parabolicEffect);
  rectCheckbox.position(10, 20);
  
  
  divOne=select("#divOne");
  divOne.html("Geometric Poetry and Similar Inspiration");


}

function draw() {
  background(0, 0, 0);

  strokeWeight(4);


  //move parabolic shape to center of screen
  translate(width / trans.x, height / trans.y);

  //text for checkbox
  textSize(12);
  fill(255);
  text('Rectangles', -290, -280);

  //call to parabolic effect function
  parabolicEffect();

  // increase the value being pushed into the function  
  t += .3;


}



//parabolic function x
function x(t) {
  if (mouseIsPressed) {
    return -sin(t / 10) * 100 + -sin(t / 10) * 100;
  } else {

    return sin(t / 10) * 100 + sin(t / 10) * 100;
  }
}


//parabolic function y
function y(t) {
  if (mouseIsPressed) {
    for (let i = 0; i < 20; i++) {
      return cos(t / 10) * i;
    }
  } else {
    return -cos(t / 10) * 20;

  }
}

//parabolic function x1
function x1(t) {

  if (mouseIsPressed) {
    return -sin(t / 10) * 100 + -cos(t / 10) * 100;
  } else {
    return sin(t / 10) * 100 + cos(t / 10) * 100;

  }
}

//parabolic function y1
function y1(t) {
  if (mouseIsPressed) {
    return cos(t / 20) * 200 + sin(t / 10) * 100;
  } else {
    return -cos(t / 20) * 200 + -sin(t / 10) * 100;

  }


}