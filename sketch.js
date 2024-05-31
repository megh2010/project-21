var ball,groundObj,leftSide,rightSide;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);


	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	ball= Bodies.circle (260,180,20,ball_options)
	World.add(world,ball)
	groundObj = new ground(width / 2, 670, width, 20);
	rightSide= new ground(350,600,20,120)
	leftSide = new ground(100, 600, 20, 120)
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85}) 
	}
	


}

function draw() {
	rectMode(CENTER);
	background(0);
	ellipse(ball.position.x,ball.position.y,20,20)
	leftSide.display()
	rightSide.display()

	groundObj.display();

}



