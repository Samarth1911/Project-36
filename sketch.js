//Create variables here
var dog
var happyDog,dogHappy
var database
var foodS,foodStock
var milk
var feed,add
var fedTime,lastFed
var foodObject,foodObj

function preload()
{
	//load images here
  happyDog = loadImage("images/dogImg.png")
  dogHappy= loadImage("images/dogImg1.png")
  

  

}

function setup() {
	createCanvas(1000, 500);

  database = firebase.database();
  console.log(database)

  dog = createSprite(850,250,30,30)
  dog.addImage(happyDog)
  dog.scale = 0.2

 
  feed = createButton('Feed the dog')
  feed.position(550,20)
  feed.mousePressed(feedDog)

  add = createButton('add food')
  add.position(650,20)
  add.mousePressed(addFoods)

  //foodObj= new Food()


  
  

  
}


function draw() {  
  background(46,139,87)

  //foodObj.display()
  

  fedTime = database.ref('FeedTime')
  fedTime.on("value",function(data){
    lastFed = data.val();
  })

  
  drawSprites();
  //add styles here
  fill(255,255,254)
  textSize(15)
  if(lastFed>=12){
    text("Last Feed :"+ lastFed%12+"PM",350,30);
  }else if(lastFed == 0){
    text("Last feed : 12 AM",350,30)
  }else{
    text("Last Feed :"+lastFed+"AM",350,30)
  }

}
function feedDog(){
  dog.addImage(dogHappy)

  foodObject = new Food()

 
  foodObject.updateFoodStock(foodObject.getFoodStock()-1)
  database.ref('/').update({
    Food : foodObject.getFoodStock(),
    fedTime:hour()

  })
}
function addFoods(){
  foodS++

  database.ref('/').update({
    Food : foodS
  })
}