var banana,bananaimage,obstacleimage;
var obstacle,obstaclegroup;
var foodGroup,foodimage;
var monkeyimage
var bg;
var player; 
var score =0;
var obstacle;
var invisibleground;

function preload(){

  backImage = loadImage("jungle.jpg");
  
 monkeyimage=loadAnimation("Monkey_01.png","Monkey_02.png", "Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
                            
                            
 bananaimage = loadImage("banana.png");
  obstacleimage = loadImage("stone.png");

  
 foodgroup = new Group();
  obstaclesGroup = new Group();
  
  
}
function setup() {
  createCanvas(400, 400);
  bg = createSprite(200,200);
  bg.velocityX = -6;
   bg.x = bg.width/2;
  bg.addImage(backImage);
  
  invisibleground = createSprite(200,200);
  invisibleground.velocityX = -6;
   invisibleground.x = invisibleground.width/2;

  var player = createSprite(30,40,60,40);
 
}

function draw() {
  
  spawnfood();
   if (bg.x < 0){
     bg.x =bg.width/2;
   }
  if(invisibleground < 0){
    bg.x = invisibleground  
  }
   if(obstaclesGroup.isTouching(player)){
       player.scale=0.2;
   }
  if (keyDown("space")){
    player.velocityY=-12;
  }
  player.velocityY = player.velocityY + 0.8;
 
  drawSprites();
  stroke("white");
  textSize(20);
  text("Score: "+ score,200,50)
}
function spawnfood(){
  if(frameCount%80===0){
    var banana = createSprite(400,200,20,20);
    banana.y = random(180,200);
    banana.addImage(bananaimage);
    banana.scale =0.1;
    banana.velocityX =-5;


     
  }
}