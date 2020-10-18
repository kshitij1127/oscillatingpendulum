
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ball = new Bob(200,200,20)
  holder = new Arm(ball.body,{x : mouseX,y : mouseY})
}


function draw() {
 
  Engine.update(engine);
holder.attach(ball.body)
  holder.display()
  ball.display()
  background(0);

}




