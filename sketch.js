
var ground,stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  block1 = new Block (330,235,30,40);
  block2 = new Block (360,235,30,40); 
  block3 = new Block (390,235,30,40);
  block4 = new Block (420,235,30,40);
  block5 = new Block (450,235,30,40);

  block6 = new Block (360,195,30,40);
  block7 = new Block (390,195,30,40);
  block8 = new Block (420,195,30,40);

  block9 = new Block (390,155,30,40);
 
 // block10 = new Block (330,235,30,40);
  

  ground=new Ground(400,650,800,20);
  stand1=new Ground(450,235,100,10);


  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
ImageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  
  launcherObject=new launcher(this.polygon,{x:100,y:200});
}


function draw() {
  background(255,255,255);  
  drawSprites();

   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
}
function mouseDragged()
{
	Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
     distance=int(dist(polygon.x,polygon.y,block1.x,block1.y ,block2.x,block2.y,block3.x,block3.y,block4.x,block4.y,block5.x,block5.y,block6.x,block6.y,block7.x,block7.y,block8.x,block8.y,block9.x,block9.y));
}