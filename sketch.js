var ballon , ballonImage;
var backgroundImage;

function preload(){
  ballonImage = loadImage("Hot Air Ballon-02.png")
  backgroundImage = loadImage("Hot Air Ballon-01.png")
}


function setup() {
  var canvas = createCanvas(500,500);
  ballon=createSprite(200,200,50,50)
  ballon.addAnimation("ballonImage");
  
}

function draw() {
  background(backgroundImage);  
  drawSprites();
  
  //up arrow
  if(keycode===38){
    ballon.y = ballon.y -10;
  }
  //down arrow
  if(keycode===40){
    ballon.y = ballon.y +10
  }
  //left arrow
  if(keycode===37){
    ballon.x = ballon.x -10
  }
  //right arrow
  if(keycode===39){
    ballon.x = ballon.x +10
  }
}