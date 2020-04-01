const Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;
 var engine,world,constraint;
 var options
 var ground;
var mc;
 var b;
 var b1;
 var b2;
 var b3;
 var b4;
 var b5;
 var b6;
 var b7;

  var chain;
 var chain1;
 var chain2;
 var chain3;
 var chain4;
 var chain5;
 var chain6;

var Canmouse;
var canvas
  function setup() {
    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
   Canmouse = Mouse.create(canvas.elt);
     options ={
         mouse:Canmouse
     } 
    mc = MouseConstraint.create(engine,options)
     World.add(world,mc)
    ground = new Ground(600,590,1200,30);
    
     b = new Ground(600,50,20,20);
     b1 = new Particle(50,50,30);
     b2 = new Particle(260,60,30);
     b3 = new Particle(230,60,30);
     b4 = new Particle(290,60,30);
     b5 = new Particle(300,80,30);
     b6 = new Particle(320,80,30);
     b7 = new Particle(340,80,30);

     chain = new Sling(b.body,b1.body);
     chain1 = new Sling(b1.body,b2.body);
     chain2 = new Sling(b2.body,b3.body);
     chain3 = new Sling(b3.body,b4.body);
     chain4 = new Sling(b4.body,b5.body);
     chain5 = new Sling(b5.body,b6.body);
     chain6 = new Sling(b6.body,b7.body);
    
  }
  function draw() {
    background(61);
    Engine.update(engine);
    ground.display();
    b.display();
    
    chain.display();
    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();
    chain6.display();
    

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
  }