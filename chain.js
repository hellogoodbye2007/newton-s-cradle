class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.link=Constraint.create(options);
        World.add(world,this.link)
    }
    display(){
        var pointA=this.link.bodyA.position;
        var pointB=this.link.bodyB.position;
        push();
        fill("white");
        stroke("white");
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
        pop();
    }
}