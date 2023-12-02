class PacajaPalitos{
    constructor(x,y,a,at,angle){
        this.x = x;
        this.y = y;
        this.ancho=a;
        this.alto = at;
        var variablePiso={
            isStatic:true
        }
        this.body = Bodies.rectangle(this.x,this.y,this.ancho,this.alto,variablePiso);
        this.image = loadImage("./Imagenes/base.png");
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        rotate(angle)
        rect(this.x,this.y,this.ancho,this.alto);
        image(this.image,this.x,this.y,this.ancho,this.alto);
        pop();
    }
}