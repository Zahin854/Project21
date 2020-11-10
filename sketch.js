var bullet, wall, thickness;
var speed, weight;




function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);
  bullet=createSprite(50,200,50,10);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0,0,0);  
  BulletCollide();
  
  drawSprites();
}
function BulletCollide(){
if(wall.x-bullet.x<(bullet.width+wall.width)/2){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
  if(damage>0){
    bullet.shapeColor=color(255,0,0)

  }
  if(damage<10){
    bullet.shapeColor=color(230,230,0)
    
  }
  if(damage>10){
    bullet.shapeColor=color(0,255,0)
    
  }
}
}