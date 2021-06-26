//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock; 
var feedDog,addFood;
var fedTime,lastFed
var foodObj;
var images, dogImg1, dogImg2;
var getFoodStock,updateFoodStock,deductFood;

function preload(){
	//load images here
  var dogImg1 = loadImage("images/dogImg.png");
  var dogImg2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  dog = createSprite();
  dog.addImage(dogImg2); 
  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
  Text("Note: Press UP_ARROW key to feed drago milk")
  foodObj = new Food

  feed = createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
 
  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFood);
}


function draw() { 
  background("46, 139, 87"); 
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("last Feed: "+lastFed%12+"PM" ,350,30);
  }else if(lastFed==0){
    text("last Feed: 12 AM",350,30);
  }else{
    text("last Feed: "+lastFed+ "AM",350,30);
  }
  
  foodObj.display()
  drawSprites();
  //add styles here

}

function addFood(){
  foodS++
  database.ref('/').update({
    Food:foodS
  })
}

function feedDog(){
  dog.addImage(happyDog)

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime: hour()
  })
}



