  var bow,arrow,scene;
  var bowImage,arrowImage,green_balloonImage,red_balloonImage,pink_balloonImage,blue_balloonImage,backgroundImage;
  var score = 0;
  var PLAY = 1;
  var END = 2;
  var pink,blue,red,green;
  var select_balloon;
function preload(){
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png"); 
}
function setup() {
  createCanvas(400, 400);
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  score = 0
   if (GAMESTATE === PLAY) {
    // moving ground
    scene.velocityX = 0;
    pink.velocityX = -3;
    green.velocityX = -3;
    red.velocityX = -3;
    blue.velocityX = -3;
  //moving bow
  bow.y = World.mouseY
  // release arrow when space key is pressed
  if (keyDown("space")) {
  createArrow(); 
   }
   }
   if (GAMESTATE === END) {
  scene.velocityX = 0;
  bow.VelocityY = 0;
  pink.velocityX = 0;
  green.velocityX = 0;
  red.velocityX = 0;
  blue.velocityX = 0;
  text('PRESS R TO RESTART',250,250)
  }
  if (keyDown("r") && GAMESTATE === "END") {
    score = 0;
    GAMESTATE === "PLAY";
  }
  if (pink.x>400) {
    GAMESTATE === 'END';
  }
  if (red.x>400) {
    GAMESTATE === 'END';
  }
  if (blue.x>400) {
    GAMESTATE === 'END';
  }
  if (green.x>400) {
    GAMESTATE === 'END';
  }
  if (score>1000) {
    text("VICTORY",250,250);
    text("THANKS FOR PLAYING",260,260);
    text("PRESS R TO RESTART",270,270);
  }
  if (keyDown("r") && GAMESTATE === "PLAY") {
    score = 0;
    GAMESTATE === "PLAY";
  }
   if (arrow.isTouching(blue)) {
     blue.destroy();
     score=score+1;
   }
   if (arrow.isTouching(pink)) {
    pink.destroy();
    score=score+4;
  }
  if (arrow.isTouching(red)) {
    red.destroy();
    score=score+3;
  }
  if (arrow.isTouching(green)) {
    green.destroy();
    score=score+2;
   }
   }
function draw() {
 background(0);
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  if (World.frameCount % 100 === 0) {
    if (select_balloon === 1) {
      redBalloon();
    } else if (select_balloon === 2) {
      greenBalloon();
    } else if (select_balloon === 3) {
      blueBalloon();
    } else if (select_balloon === 4) {
      pinkBalloon();
    }
  }  
text("Score: "+ score, 300,50);
drawSprites();
}
// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100,100,60,10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX =-7;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}
function redBalloon() {
  var red = createSprite(0,Math.round(random(10,390)),10,10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}
function blueBalloon() {
  var blue = createSprite(0,Math.round(random(10,390)),10,10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}
function greenBalloon() {
  var green = createSprite(0,Math.round(random(10,390)),10,10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}
function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(10,390)),10,10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
}