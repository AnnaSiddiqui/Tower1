const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var object, stand;
var Block1, Block2, Block3, Block4, Block5, Block6, Block7, Block8, Block9;

var gameState = "onSling";



function setup() {
  createCanvas(1000,400);
  
  object = new Ground(400, 200, 50, 50);
  stand = new Ground(100, 100, 200, 20);
  Block1 = new Box(330, 235, 30, 40);
  Block2 = new Box(360, 235, 30, 40);
  Block3 = new Box(390, 235, 30, 40);
  Block4 = new Box(420, 235, 30, 40);
  Block5 = new Box(450, 235, 30, 40);
  Block6 = new Box(360, 195, 30, 40);
  Block7 = new Box(360, 195, 30, 40);
  Block8 = new Box(420, 195, 30, 40);
  Block9 = new Box(390, 155, 30, 40);

polygon = Bodies.circle(50, 200, 20);
world.add(world,polygon);




}

function draw() {
  background(255,255,255);
  
  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();
  Block5.display();
  Block6.display();
  Block7.display();
  Block8.display();
  Block9.display();

  slingShot = new Slingshot(this.polygon,{x:100,y:200});


  drawSprites();
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32 && polygon.body.speed<1){
      polygon.trajectory = [];
      Matter.Body.setPosition(polygon.body,{x:200, y:50});
      slingshot.attach(polygon.body);
      console.log("Is keypressed working");
  }
}