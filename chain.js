class Chain{
    constructor(body1,a,b){
        var chain_options = {
            bodyA: body1,            
            pointB: {x:a,y:b},
            stiffness: 0.02,
            length:1
        }
        this.chain = Constraint.create(chain_options);
        this.a = a;
        this.b = b;
        World.add(world, this.chain)

    }

    display(){
        if(this.chain.bodyA){
        var posA = this.chain.bodyA.position
        var posB = this.chain.pointB
        push()
        strokeWeight(7)
        // line(x1,y1,x2,y2)// point1 to point 2  x1,y1 are positions of point1
        line(posA.x,posA.y,posB.x,posB.y)
        pop()}
    }
    fly(){
        this.chain.bodyA = null
    }
}