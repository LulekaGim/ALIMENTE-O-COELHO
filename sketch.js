//Criando as sprites
var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg
var orangeL, orangeImg
var redL, redImg

//colocando desenhos nas sprites
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  //colocando os functions
  createApples();
  createOrange();
  createRed();
  
 //criando as paredes do jogo
  edges= createEdgeSprites();
  rabbit.collide(edges);

  //o coelho segue o movimento X do mouse
  rabbit.x = World.mouseX;


/*if (frameCount % 80 == 0) {
  if (select_sprites == 1) { 
  createApples();
 } else if (select_sprites == 2) {
  createOrange();
 }else {
  createRed();
 }
} */

//fazer sprites diferentes
  drawSprites();
}

//Criando os codigos da maçã
function createApples() {
  if (frameCount %160 == 0) {
  apple = createSprite (random(50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY = 4.5;
  apple.lifetime = 150;
  apple.x = Math.round(random(50,350))
    }
   }
  
//Criando os codigos da folha Laranja
function createOrange() {
  if (frameCount % 80 == 0) {
  orangeL = createSprite (random(50, 350), 40, 10, 10);
  orangeL.addImage (orangeImg);
  orangeL.scale=0.08;
  orangeL.velocityY = 4;
  orangeL.lifetime = 150;
  orangeL.x = Math.round(random(50,350))
  }
  }

//Criando os codigos da folha Vermelha
  function createRed() {
    if (frameCount % 240 == 0) {
    redL = createSprite(random(50, 350), 40, 10, 10);
    redL.addImage(redImg);
    redL.scale = 0.06;
    redL.velocityY = 3;
    redL.lifetime = 150;
    redL.x = Math.round(random(50,350))
     }
    }