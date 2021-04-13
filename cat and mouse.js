
function preload() {
    //load the images here
    backgroundImg=loadImage("images/garden.png")
    tom1Img=loadAnimation("images/cat1.png")
    tom2Img=loadAnimation("images/cat2.png","images/cat3.png")
    tom3Img=loadAnimation("images/cat4.png")
    jerry1Img=loadAnimation("images/mouse1.png")
    jerry2Img=loadAnimation("images/mouse2.png","images/mouse3.png")
    jerry3Img=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   tom=createSprite(600,600)
   tom.addAnimation("tomImg",tom1Img)
   tom.scale=0.2;
   jerry=createSprite(100,600)
   jerry.addAnimation("jerryImg",jerry1Img)
   jerry.scale=0.2;

}

function draw() {

    background(backgroundImg);
    
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x< (tom.width - jerry.width)/2) {
    tom.velocityX=0;
    tom.addAnimation("lastImage",tom3Img)
    tom.changeAnimation("lastImage")
    jerry.addAnimation("jerrylastImage",jerry3Img)
    jerry.changeAnimation("jerrylastImage")
    }

  keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode==LEFT_ARROW) {
    tom.velocityX=-5
    tom.addAnimation("tomRunning",tom2Img)
    tom.changeAnimation("tomRunning")
    jerry.addAnimation("jerryTeasing",jerry2Img)
    jerry.frameDelay=25;
    jerry.changeAnimation("jerryTeasing")
  }



}
