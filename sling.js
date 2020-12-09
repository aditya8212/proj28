class SLING{
        constructor(a,b){
            var options={
                bodyA : a,
                pointB : b,
                stiffness:0.04,
                length:10

            }

            this.pointB = b;
            this.body = ma.create(options);
            World.add(world,this.body);

        }

        fly(){
            this.body.bodyA = null;
        }

        display(){
            if(this.body.bodyA){
                
            var posa = this.body.bodyA.position;
            var posb = this.pointB;

            strokeWeight(4);
            line(posa.x,posa.y,posb.x,posb.y);
            }
        }

}