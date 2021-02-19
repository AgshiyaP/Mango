
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stone;
var chain;



function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
  world = engine.world;
  
  boy = new Boy(300,500);

	mango1 = new Mango(1000,110,30);
	mango2 = new Mango(1100,70,30);
	mango3 = new Mango(1100,190,30);
	mango4 = new Mango(930,200,30);
	mango5 = new Mango(980,250,30);
	mango6 = new Mango(1200,110,30);
  mango7 = new Mango(1200,230,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

  stone = new Stone(364,438,30,30);

  

  chain = new Chain(boy.body,{x:200 ,y:400})
	chain.attach(stone.body);
	
	Engine.run(engine);

}

function draw() {

  background("cyan");
  textSize(24);
  fill("black")
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 200,200);

  boy.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stone.display()

  groundObject.display();

  chain.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);

  drawSprites();

  fill(0)
  text(mouseX + " , " + mouseY, mouseX,mouseY)
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
  chain.fly();
}
function keyPressed(){
if(keyCode === 32){
  Matter.Body.setPosition(stone.body,{x:160, y:500});
  chain.attach(stone.body);
}
}
function detectCollision(lstone,lmango){
stoneBodyPosition = lstone.body.position;
mangoBodyPosition = lmango.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
if(distance <= lmango.r + lstone.r){
  Matter.Body.setStatic(lmango.body, false);
}

}
