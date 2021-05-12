class Food{
    constructor(x,y,width,height){
        this.width = width
        this.x = x
        this.height = height
        this.y = y
        this.image  = loadImage("images/Milk.png")

        


    }
    getFoodStock(){
var foodStockRef = database.ref('foodStock')
foodStockRef.on("value",function(data){
    foodStock = data.val();
})
    }
    update(foodS){
        database.ref('/').update({
            foodStock = foodS

        })


    }
    display(){
        var x= 80,y=100

        imageMode(CENTER)
        image(this.image,720,220,70,70)

        if(foodStock!=0){
            for(var i=0;i< this.foodStock;i++){
                if(i%10==0){
                    x=80
                    y=y+50
                }
                image(this.image,x,y,50,50);
                x = x+30
            }
        }

    }
}