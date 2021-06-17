var gameState =  "serve"


function preload(){
background1 = loadImage("desertbg.jpg");
boyimg = loadAnimation("13.png")
atheimg = loadAnimation("0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png",)
boyImg1 = loadAnimation("14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png","30.png","31.png","32.png","33.png","34.png","35.png","36.png","37.png","38.png","39.png","40.png","42.png","43.png")
}



function setup() {
	createCanvas(displayWidth-40,displayHeight-30);


	

	//Create the Bodies Here.
	ground = createSprite(width/2,height-10,displayWidth,20)
	boy    =  createSprite(width/5,height-160,100,100)
boy.addAnimation("anim",boyimg);
boy.addAnimation("collided",boyImg1)
boy.scale = (2);

  athena = createSprite(width/2,height-110,100,100);
  athena.addAnimation("goddess",atheimg);
athena.scale = (2)
  
}


function draw() {
  rectMode(CENTER);
  background(background1);
drawSprites();

if(gameState === "serve"){
  text ("Press The Space Bar To Punch!!",100,100)

}

  if(keyDown("space")&& gameState === "serve"){
    serve();
    gameState = "play"
}  
  


 


 
 
}

function serve(){
  if (keyWentDown("RIGHT_ARROW")){
    boy.changeAnimation("collided",boyImg1);
    
  }
}

