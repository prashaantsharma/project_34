//Create variables her
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
function preload(){
dog = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,300,150,150);
   dog.addImage(dogImg);
    dog.scale=0.15;
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  fill(255,255,254); 
  stroke("black");
   text("Food remaining : "+foodS,170,200);
    textSize(13);
     text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
  //add styles here

}
function readStock(data){
foodS=data.val();
}
function writeStock(x)
{ if(x<=0){ x=0; }
else{ x=x-1; } database.ref('/').update({
   Food:x }) }




