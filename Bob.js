class Bob {
    constructor(x,y,r){
        var options = {
            density : 1
        }
        this.r = r
        this.body = Bodies.circle(x,y,this.r,options)
        World.add(world,this.body)
    }

    display(){
        var position = this.body.position 
        push()
        ellipseMode(CENTER)
        ellipse(position.x,position.y,this.r)
        pop()
    }
}