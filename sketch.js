
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var rope1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5,theroof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1=new Bob(280,500,30);
	bob2=new Bob(340,500,30);
	bob3=new Bob(400,500,30);
	bob4=new Bob(460,500,30);
	bob5=new Bob(520,500,30);
	theroof=new Roof(400,20,600,30);
	rope1=new Rope(bob1.body,theroof.body,-120,0);
	rope2=new Rope(bob2.body,theroof.body,-60,0);
	rope3=new Rope(bob3.body,theroof.body,0,0);
	rope4=new Rope(bob4.body,theroof.body,60,0);
	rope5=new Rope(bob5.body,theroof.body,120,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  theroof.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-90});
	}
}