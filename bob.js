class Bob{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.2,
            friction:1,
            density:1.2,
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.width=radius;
        this.height=radius;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.width,this.height);
        pop();
    }
};