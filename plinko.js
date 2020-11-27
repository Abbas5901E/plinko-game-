class Plinko {
    constructor(x, y){
        var options = {isStatic:true, restitution:0.2, density:0.5};
        this.radius = 20;
        this.body = Bodies.circle(x, y, (this.radius-20)/2, options);
        World.add(world, this.body);
    }
     display(){
         var pos = this.body.position;
         push();
         translate(pos.x, pos.y);
         imageMode(CENTER);
         rectMode(CENTER);
         fill("white");
         ellipse(0, 0, this.radius);
         pop();

     }
}