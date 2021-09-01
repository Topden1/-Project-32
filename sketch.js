const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var zombie1, zombie2, zombie3, zombie4;
var backgroundImage;
var zombiesad;


function preload() {
  zombie1 = loadImage("./assets/zombie1.png");
  zombie2 = loadImage("./assets/zombie2.png");

  zombie3 = loadImage("./assets/zombie3.png");
  zombie4 = loadImage("./assets/zombie4.png");

  zombiesad = loadImage("./assets.zombiesad.png");

  backgroundImage = loadImage("./assets/background.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  zombie = createSprite(width / 2, height -110);
  zombie.addAnimation("lefttoright", zombie1, zombie2, zombie1);
  zombie.addAnimation("righttoleft", zombie3, zombie4, zombie3);
  zombie.scale = 0.1;
  zombie.velocityX = 10;

  breakButton = createButton("");
  breakButton.position(width - 200, height / 2 - 50);
  breakButton.class("breakbutton");
  breakButton.mousePressed(handleButtonPress);

  
}

function draw() {
  background(51);
  Engine.update(engine);

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint)


  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }

  for (var stone of stones) {
    stone.show();
    var pos = stone.body.position;
    var distance = dist(zombie.position.x, zombie.position.y, pos.x, pos.y);
    if(distance <= 50) {
      zombie.velocityX = 0;
      Matter.Body.setVelocity(stone.body, { x: 10, y: -10});
      zombie.changeImage("sad");
      collided = true;
    }
  }
  drawSprites();
}

function handleButtonPress() {
  jointLink.detach();
  setTimeout(() => {
    bridge.break();
  }, 1500);

}