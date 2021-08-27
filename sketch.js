
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var lground,rground;


function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ball=Bodies.circle(200,200,20,{restition:0.75})
 World.add(world,ball);
 ground=new Ground(200,390,400,10);
 lground=new Ground(250,340,10,100);
 rground=new Ground(350,340,10,100);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
 
  background(51);
  ground.display()
  lground.display()
  rground.display()
  keyPressed()
  fill("white")
  ellipse(ball.position.x,ball.position.y,20);
 Engine.update(engine);

}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,Y:0},{x:0.005,y:0})
	}
}

