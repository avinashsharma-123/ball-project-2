
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground1=new ground (200,500,1000,20)
	
	box3=new Box(550,200,200,100)
	paper1=new paper(100,200,20)
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground1.display()
 
  box3.display()
  paper1.display()
  drawSprites();
 
}
function keyPressed()
{
	if(keyCode==UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{
		x:50,y:-40	})

	
	}
}



