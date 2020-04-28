var r = 0;
var g = 0;
var b = 255;

function setup() {
  createCanvas(600,400);
  
}

function draw() {
  //background
  r = map(mouseX,0,600,0,255);
  g = map(mouseX,0,600,255,0);
  b = map(mouseX,0,600,255,0);
  background(r,g,b);

  //ellipse
  ellipse(mouseX,200,40);
  
  drawSprites();
}



















/*alpha = background(75,0,130);
  beta = background(72,61,139);
  charlie = background(138,43,226);
}

function draw() {
  background("white");
  
 if(a.x = World.mouseX){
   
  if(a.x < 0 && a.x > 300){
    alpha;
  }
  else if(a.x < 300 && a.x > 600){
    beta;
  }
  else if(a.x < 600 && a.x > 900){
    charlie;
  }
}*/