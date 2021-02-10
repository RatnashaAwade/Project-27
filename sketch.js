
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
	roof = new Roof(399,400,220,20);
	bobObject1 = new Bob(310,600,40);
	bobObject2 = new Bob(353,600,40);
	bobObject3 = new Bob(396,600,40);
    bobObject4 = new Bob(439,600,40);
	bobObject5 = new Bob(482,600,40);
	rope1 = new Rope(bobObject1.body,roofObject.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject.body,bobObject.boby.position{x:85,x:-85});
	}
}



