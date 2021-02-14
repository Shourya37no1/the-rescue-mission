var backgroundImg,level2background,board1,board1_img,locker ,locker_img,no1,no2,no3,no3_img,no2_img,no1_img,attack,attack_img;
var closeoption,closeoption_img,puzzle,puzzle_img,hint,hint_img,robot,robot_img,hero,hero_img,ground,ground_img,selectno,attack2,attack2_img;
var lockerstate,hintstate,puzzlestate,formulaState,bomb2_img,board2,board2_img,heroimg,robolife,wonimg;
var level,closeoption1,closeoption1_img,closeoption2,closeoption2_img,antidote_img,formula,formula_img,testtube,testtube_img,gameover_img;

function preload(){
    
backgroundImg = loadImage("sprites/background.jpg") ;
    board1_img = loadImage("sprites/Untitled.png");
    locker_img = loadImage("sprites/2.png");
    no1_img=loadImage("sprites/4.png");
    no2_img=loadImage("sprites/20.png");
    no3_img=loadImage("sprites/22.png");
    closeoption_img=loadImage("sprites/5.png");
    level2background=loadImage("sprites/level2.jpg");
    puzzle_img=loadImage("sprites/11.png");
    hint_img=loadImage("sprites/12.png");
   hero_img=loadImage("sprites/90.png");
    attack_img=loadImage("sprites/at6.png");
    ground_img=loadImage("sprites/Ground.png");
    robot_img=loadImage("sprites/idle_000.png","sprites/idle_001");
    attack2_img=loadImage("sprites/bo.png");
    closeoption1_img=loadImage("sprites/close.png");
    closeoption2_img=loadImage("sprites/hintclose.png");
antidote_img=loadImage("sprites/antidote.png");
formula_img=loadImage("sprites/formula.png");
testtube_img=loadImage("sprites/ooo.jpg");
gameover_img=loadImage("sprites/gameover.png");
bomb2_img=loadImage("sprites/bomb2.png");
board2_img=loadImage("sprites/board3.png");
heroimg=loadImage("sprites/jump.png");
wonimg=loadImage("sprites/won.png")
}

function setup(){

    var canvas = createCanvas(1200,600);

    testtube= createSprite(600,270,50,100);
    testtube.addImage(testtube_img);
    testtube.scale=0.3;

    

    attack = createSprite(300,500,50,50);
    attack.addImage(attack_img);
    attack.scale=0.1;
    
    hero = createSprite(300,400,50,50);
    hero.addImage(heroimg);
    hero.scale=0.2;


   
     formula=createSprite(1100,80,40,40);
     formula.addImage(formula_img);
     formula.scale=0.04;
  
     locker = createSprite(270,447,50,50);
 locker.addImage(locker_img);
 locker.scale=0.04;
 
 hint = createSprite(500,400,50,50);
 hint.addImage(hint_img);
 hint.scale=0.08;
 
 
 puzzle= createSprite(600,400,100,50);
 puzzle.addImage(puzzle_img);
 puzzle.scale=0.08;
 

 board1 = createSprite(600,300,100,50);
 board1.addImage(board1_img);
 board1.scale=0.7;
 
 no1 = createSprite(20,20,20,30);
 no1.addImage(no1_img);
 no1.scale=0.04;
 
 no2 = createSprite(20,30,40,20);
 no2.addImage(no2_img);
 no2.scale=0.04;
 
 no3 = createSprite(20,50,20,30);
 no3.addImage(no3_img);
 no3.scale=0.04;

 board2=createSprite(400,200,100,100);
  board2.addImage(board2_img);
  board2.scale=0.7;

 closeoption  =createSprite(600,30,20,20);
closeoption.addImage(closeoption_img);
closeoption.scale=0.001;

closeoption2  =createSprite(500,80,20,20);
closeoption2.addImage(closeoption2_img);
closeoption2.scale=0.001;

closeoption1  =createSprite(300,50,20,20);
closeoption1.addImage(closeoption1_img);
closeoption1.scale=0.001;


attack2=createSprite(1200,400,5,5);
    attack2.addImage(attack2_img);
    attack2.scale=0.7;

robot = createSprite(700,400,50,50);
    robot.addImage(robot_img);
    robot.scale=0.3;




lockerstate = "open";
level="first";
gameState="play";
puzzlestate="open1";
hintstate="open2";
robolife=20;
formulaState="not";


}
function draw(){
    background(backgroundImg);
   
        
if(keyDown("r")){

    level="first";
    gameState="play";
}




 if(level === "first"){
    puzzleopen();
hintopen();
 close();
 closeboard();
 lol();
 lol1();
 lol2();
   
 board2.visible=false;
 testtube.visible=false;
attack.visible=false;
attack2.visible=false;
robot.visible=false;
hero.visible=false;
no1.visible=false;
no2.visible=false;
no3.visible=false;
formula.visible=false;


    
closeoption.x=locker.x;
closeoption.y=locker.y;
closeoption.scale=0.08;

if (lockerstate==="close"){
    locker.scale=0.5;
    no1.x=800;
    no1.y=400;
    no1.visible=true;
    no1.scale=0.4;

    no2.x=1000;
    no2.y=400;
    no2.visible=true;
    no2.scale=0.4;

    no3.x=800;
    no3.y=500;
    no3.visible=true;
    no3.scale=0.4;


} else {
locker.scale=0.05;
}

if (hintstate==="close2"){
    hint.scale=0.6;
} else {
hint.scale=0.08;
}

if (puzzlestate==="close1"){
    puzzle.scale=0.6;
} else {
puzzle.scale=0.08;
}

if (mousePressedOver(no2)){
formula.visible=true;
formula.scale=0.4;
}

if(mousePressedOver(no1)){
    gameState="end";

}
if(mousePressedOver(no3)){
    gameState="end";

}



if (mousePressedOver(formula)){
    formulaState = "got"  ;
}

 }

 if (formulaState === "got"){

    board1.visible=false;
    no1.visible=false;
   no2.visible=false;
  no3.visible=false;
    locker.visible=false;
    closeoption.visible=false;
    hint.visible=false;
    puzzle.visible=false;
    attack.visible=false;
attack2.visible=false;
robot.visible=false;
hero.visible=false;
no1.visible=false;
no2.visible=false;
testtube.visible=false;
no3.visible=false;

 background(antidote_img);
 formula.visible=true;
 formula.scale=0.7;



formula.x= mouseX;
formula.y=mouseY;
 
if (formula.isTouching(testtube)){
    level="second";
}



 }
 if (level==="second"){

 background(level2background);

    board1.visible=false;
    no1.visible=false;
   no2.visible=false;
  no3.visible=false;
    locker.visible=false;
    closeoption.visible=false;
    hint.visible=false;
    puzzle.visible=false;
    formula.visible=false;
testtube.visible=false;
attack2.y=random(400,500);
  
  attack2.visible=true;
  board2.visible=true;
  robot.visible=true;
  hero.visible=true;

  
  

ground = createSprite(600,610,5,2200);
ground.addImage(ground_img);
ground.scale=2;
hero.bounceOff(ground);

if (hero.isTouching(ground)){
    hero.addImage(hero_img);
}else{
    hero.addImage(heroimg);
}

if(keyDown("o")){
attack2.velocityX=-6;
 }

if(keyDown("space")){
    hero.y=hero.y-20;
  
        }

hero.velocityY=4;

attack.visible=true;

    if(keyDown("m")){
        attack.x=300;
        attack.y=500;
        attack.velocityX=16;
      
    }

    
    
if (robot.isTouching(attack)){
    robolife=robolife-1;
    
    
    
}

   

}
  
if (robolife < 0){
    background(wonimg);
    level="won";
}

if (level==="won"){
    board1.visible=false;
    no1.visible=false;
   no2.visible=false;
  no3.visible=false;
    locker.visible=false;
    closeoption.visible=false;
    hint.visible=false;
    puzzle.visible=false;
    attack.visible=false;
attack2.visible=false;
robot.visible=false;
hero.visible=false;
no1.visible=false;
no2.visible=false;
testtube.visible=false;
no3.visible=false;
board2.visible=false;
attack2.velocityX=0;

}

if (hero.isTouching(attack2)){
    gameState="end";
}
  

if (gameState==="end"){
background(gameover_img);
attack2.addImage(bomb2_img);
attack2.velocityX=0;

board1.visible=false;
    no1.visible=false;
   no2.visible=false;
  no3.visible=false;
    locker.visible=false;
    closeoption.visible=false;
    hint.visible=false;
    puzzle.visible=false;
    attack.visible=false;
attack2.visible=false;
robot.visible=false;
hero.visible=false;
no1.visible=false;
no2.visible=false;
testtube.visible=false;
no3.visible=false;
board2.visible=false;
}


 drawSprites();
}

function close(){
    if (mousePressedOver(locker)){
       
      lockerstate="close";
    }
}

function closeboard(){
    if (mousePressedOver(board1)){
        board1.visible=false;
        

    }
}

function lol(){
    if(mousePressedOver(closeoption)){
        lockerstate="open";
        
    }
}
function puzzleopen(){
    if(mousePressedOver(puzzle)){
        puzzlestate="close1";
    
  
    }
}

function hintopen(){
    if(mousePressedOver(hint)){
        hintstate="close2";
    
  
    }
}

function lol1(){
    if(mousePressedOver(closeoption)){
        hintstate="open2";
        

    }
}

function lol2(){
    if(mousePressedOver(closeoption)){
        puzzlestate="open1";
        

    }
}


