class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
    }

    attach(body){
        this.SlingShot.bodyA = body;
    }

    fly(){
        this.SlingShot.bodyA = null;
    }


    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
        }
        }

}