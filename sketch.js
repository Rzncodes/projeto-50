var backGround, backGroundImage;
var ballon, ballonImage;
var obstacle, predio1Image, predio2Image, posteImage;

function preload(){
    backGroundImage = loadImage("assets/bg.png");
    ballonImage = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png")
    predio1Image = loadImage("assets/obsBottom1.png");
    posteImage = loadImage("assets/obsBottom2.png");
    predio2Image = loadImage("assets/obsBottom3.png");
}

function setup(){
    createCanvas(1200, 600);

    // imagem de fundo
    backGround=createSprite(600, 300);
    backGround.addImage(backGroundImage);

    //criar balão
    ballon = createSprite(100, 300, 20, 50);
    ballon.addAnimation("balloon", ballonImage);
    ballon.scale = 0.35;
    


}

function draw() {
    background("black");
  

    //fazendo o balão se movimentar
    if(keyDown("space")){
        ballon.velocityY = -5;
    };

    ballon.velocityY += 0.6;

    //chmar a função de spawnar obstaculos
    spawnObstacles();
    drawSprites();
}

function spawnObstacles() {
  if (frameCount%122 == 0){
    var obstacle = createSprite(1200, 550, 90, 120);
    obstacle.velocityX = -4;
    obstacle.scale = 0.22;

    // gerar os obstaculos de forma aleatória
    var rand = Math.round(random(1,3));
    switch(rand){
        case 1 : obstacle.addImage(predio1Image);
        break;

        case 2 : obstacle.addImage(posteImage);
        break;

        case 3 : obstacle.addImage(predio2Image);
        break;

        default:
        break;
    }
    obstacle.lifetime = 350;
  }
}
