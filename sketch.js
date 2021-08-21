const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
Computerbase=new ComputerBase(400,random(450,height-300),100,100);
Playerbase=new PlayerBase(1200,random(400,height-200),100,100)
Player=new Player(+1250, Playerbase.body.position.y - 80, 50, 180);
Computer=new Computer(+450,Computerbase.body.position.y - 80, 50, 180);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   Computerbase.display()
   Playerbase.display()
  

   //display Player and computerplayer
  Player.display();
 Computer.display();
}
