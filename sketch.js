var ball 



//preload function is used to load images, animations, sounds
function preload(){

}

//setup function is used to create sprite (codes that should be executed only once)
function setup(){
createCanvas(1000,800)
ball= createSprite (200,200,50,50)

}

//function draw is used when the code is wanted to be executed multiple times
function draw (){
background("black")
if (keyDown(RIGHT_ARROW)){
ball.position.x=ball.position.x + 5
}
if (keyDown(LEFT_ARROW)){
  ball.position.x=ball.position.x - 5
  }
  if (keyDown(UP_ARROW)){
    ball.position.y=ball.position.y - 5
    }
    if (keyDown(DOWN_ARROW)){
      ball.position.y=ball.position.y + 5
      }

drawSprites()

}
