var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	packageSprite=createSprite(helicopterSprite.x,helicopterSprite.y, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.visible = false

	groundSprite=createSprite(width/2, height-25, width,50);
	groundSprite.shapeColor ="green";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(helicopterSprite.x,helicopterSprite.y, 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxrightSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxrightSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(3, 136, 252));
 
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  

  if(keyDown(LEFT_ARROW)){
	  helicopterSprite.velocityX = -2;
  }

  if(keyDown(RIGHT_ARROW)){
	  helicopterSprite.velocityX = 2;
  }

  if(keyDown(DOWN_ARROW)){
	  packageSprite.visible = true;
	  Matter.Body.setStatic(packageBody, false);
  }
  
  drawSprites();
  
  
 
}