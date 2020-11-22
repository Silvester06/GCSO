var car,wall
var speed,weight

function setup() {
  createCanvas(800,400);
  speed = random(55,90) 
  weight = random(400,1500)
  car = createSprite(50,200,50,50)
  wall = createSprite(1500,200,60,height/2)
  wall.shapeColor = color(80,80,80)
  car.velocityX = speed
  var deformation = 0.5 * weight * speed * speed/22500
  if(deformation>180) 
  {
    car.shapeColor = "red"
  }
  if(deformation<180 && deformation>100)
  {
    car.shapeColor = "yellow"
  }
  if(deformation<180)
  {
    car.shapeColor = "green"
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
}