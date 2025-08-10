"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return (this.width + this.height) * 2;
    }
    printInfor() {
        return `Rong:${this.width}\nDai:${this.height}\nArea:${this.area()}\nPerimeter:${this.perimeter()}`;
    }
}
const rectangle = new Rectangle(3, 4);
console.log(rectangle.printInfor());
