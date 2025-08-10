class Rectangle{
    private width : number;
    private height: number;

    constructor(width:number,height:number){
        this.width = width;
        this.height = height;
    }

    area():number{
        return this.width * this.height;
    }

    perimeter():number{
        return (this.width + this.height) * 2;
    }

    printInfor(){
        return`Rong:${this.width}\nDai:${this.height}\nArea:${this.area()}\nPerimeter:${this.perimeter()}`;

    }
}
const rectangle = new Rectangle(3, 4);
console.log(rectangle.printInfor());


