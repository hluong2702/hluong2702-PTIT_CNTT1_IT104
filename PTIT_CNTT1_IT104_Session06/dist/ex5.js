"use strict";
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    getSpeed() {
        return this.speed;
    }
    slowDown() {
        return this.speed -= 10;
    }
    stop() {
        return this.speed = 0;
    }
    speedUp() {
        return this.speed += 10;
    }
}
const vehicle1 = new Vehicle(30);
console.log(vehicle1.slowDown());
console.log(vehicle1.stop());
console.log(vehicle1.speedUp());
