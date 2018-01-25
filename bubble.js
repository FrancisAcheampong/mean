var bubble = {
 x:300, 
 y:200,
 }
 function setup(){
 createCanvas(600,400)
  }
  
  function draw(){
  background(0);
  move();
  show();
  }
  function show(){
  stroke(255);
  strokeweight(4);
  noFill();
  eclipse(bubble.x,bubble.y,24,24);
  } 
  function move(){
  bubble.x = bubble.x + random(-5,5);
  bubble.y = bubble.y + random(-5,5);
  }