function setup() {
  createCanvas(900,400);
  
  a = createSprite(200,200,30,30);
  a.shapeColor="yellow";
    
}

function draw() {
  background("white");
  
 a.x = World.mouseX;
   
  if(a.x > 0 && a.x < 300){
    background(75,0,130);
  }
  else if(a.x > 300 && a.x < 600){
    background(72,61,139);
  }
  else if(a.x > 600 && a.x < 900){
    background(138,43,226);
  }

  
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