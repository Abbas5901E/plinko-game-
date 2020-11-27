class Particle {
    constructor(x, y,r){
        var options = {isStatic:false, restitution:0.1};
        this.radius = r;
        this.body = Bodies.circle(x, y, (this.radius-20)/2, options);
        this.color = color(random(0,255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
     display(){
         var pos = this.body.position;
         push();
         translate(pos.x, pos.y);
         ellipseMode(CENTER);
         fill(this.color);
         ellipse(0, 0, this.radius);
         pop();

     }
}