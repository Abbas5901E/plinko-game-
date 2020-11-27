const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var division1, division2, division3, division4, division5, divison6;
var particles = [];
var divisions = [];
var divisionHeight=300; 
 var plinkos = [];
 var score;


function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

 for (var k = 0; k <=width; k = k + 80){ 
   divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75)); 
  } 
  for (var j = 50; j <=width-10; j=j+50) { 
    plinkos.push(new Plinko(j,175)); 
  } 
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275)); 
  }
   for (var j = 50; j <=width-10; j=j+50) { 
     plinkos.push(new Plinko(j,375)); 
  }
  
  ground1 = new ground(width/2,height,width,20);
  /*division1 = new Divisions(70, 633, 13, 300);
  division2 = new Divisions(140, 633, 13, 300);
  division3 = new Divisions(210, 633, 13, 300);
  division4 = new Divisions(280, 633, 13, 300);
  division5 = new Divisions(350, 633, 13, 300);
  division6 = new Divisions(420, 633, 13, 300);*/

  Engine.run(engine);
  score = 0;
  
}

function draw() {
  background("black"); 
  Engine.update(engine);
  
 for (var i = 0; i < plinkos.length; i++) { 
   plinkos[i].display(); 
  } 
  if(frameCount%60===0){ 
    particles.push(new Particle(random(width/2-30, width/2+30), 15,15)); 
    score = score + 10; 
  } 
  for (var j = 0; j < particles.length; j++) { 
    particles[j].display(); 
  } 
  for (var k = 0; k < divisions.length; k++) { 
    divisions[k].display(); 
  }

  ground1.display();
  /*division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();*/

  strokeWeight(35);
  text("Score : "+ score, 120,130); 


  drawSprites();
}