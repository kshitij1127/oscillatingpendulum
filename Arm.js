class Arm{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 7
        }
       
       this.arm = Constraint.create(options)
       World.add(world,this.arm)
    }

     attach(body){
         this.arm.bodyA = body
     }

    display(){
        var pointA = this.arm.bodyA.position
        var pointB = this.pointB
    }
}