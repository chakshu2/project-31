class Thunder1{
    constructor(x, y, width, height) {
        var options = {
           
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width =350;
        this.height = 350;
        
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}