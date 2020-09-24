const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var helicopter, helicopterImg;
var packageBody,ground;
var box1, box2, box3;

function preload()
{
	helicopterImg = loadImage("helicopter.png");
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 580, width, 10 , {isStatic:true, restitution: 0.8} );
	World.add(world, ground);
	
	packageBody = new PackageSprite(400, 50, 40, 40);
	console.log(packageBody);

	// helicopter = Bodies.rectangle(400, 50, 50, 50 , {isStatic:true});
	// World.add(world, helicopter);

	helicopter = createSprite(400, 50, 40, 40);
	helicopter.addImage(helicopterImg);
	helicopter.scale = 0.5;
	
	box1 = new Box(400,580,200,20);
	box2 = new Box(290,540,20,100);
	box3 = new Box(510,540,20,100);	  
}


function draw() 
{
	background(0);
	Engine.update(engine);

	rectMode(CENTER);
  	rect(ground.position.x, ground.position.y, width, 10);
  

  	box1.display();
  	box2.display();
  	box3.display();

	packageBody.display();

	drawSprites();
	  
	// imageMode(CENTER);
	// image(helicopterImg, helicopter.position.x, helicopter.position.y, 50, 50);
}

function keyPressed() 
{
 if (keyDown(DOWN_ARROW)) {

	Body.setStatic(packageBody.body, false);

 }
}



