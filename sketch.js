
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var chain
function preload()
{
	boyIMG = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(400, 680, 1200, 5);
	tree1 = new Tree(700, 450, 20, 20);
	boy1 = new Boy(200, 600, 150, 450);
	stone1 = new Stone(150, 500, 50);
	mango1 = new Mango(580, 350, 50);
	mango2 = new Mango(700, 400, 50);
	mango3 = new Mango(750, 350, 50);
	mango4 = new Mango(800, 400, 50);
	chain = new Chain(stone1.body, 150, 400)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  ground1.display();
  tree1.display();
  boy1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  chain.display();
 
 detectCollision(stone1,mango1)
 detectCollision(stone1,mango2)
 detectCollision(stone1,mango3)
 detectCollision(stone1,mango4)

}

function mouseDragged(){
    Matter.Body.setPosition( stone1.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
    chain.fly();
}

function detectCollision(stone, mango){
	var sp = stone.body.position 
	var mp = mango.body.position
	var distance = dist(sp.x, sp.y, mp.x, mp.y)
	
	var dif = stone.body.circleRadius+mango.body.circleRadius
	
	if(distance<dif ){
		Matter.Body.setStatic(mango.body, false);
	}
}