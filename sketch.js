
var a,b;



function setup() {
  createCanvas(800,400);
  a=createSprite(200, 200, 50, 50);
a.shapeColor"green";

   b=createSprite(400, 200, 50, 50);
   b.shapeColor"green";

}

function draw() {
  background(255,255,255);  

a.x=world.mouseX;
a.y=world.mouseY;

if(a.width/2+b.width/2<40){
  a.shapeColor"red";
 b.shapeColor"red";
}
else{
   a.shapeColor"green";
   b.shapeColor"green";

}
  drawSprites();
}