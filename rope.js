class Rope{
    constructor(bodyA,pointB){
       var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2
        }
        
        this.pointB=pointB
        this.bodyA=bodyA
        this.rope=Constraint.create(option);
        World.add(world,this.rope);

    }

    attach(body){

        this.rope.bodyA=body;
        
    }

    fly(){

       this.rope.bodyA=null

    }


    display(){
         
        push()
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(5);
        stroke("black");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop()

    }

    
}
