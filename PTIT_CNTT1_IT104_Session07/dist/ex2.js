"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        return this.speed -= 10;
    }
    speedUp() {
        return this.speed += 10;
    }
    showSpeed() {
        console.log(`${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
const bicycle = new Bicycle("bibabibo", 50, "Mx01", 100);
bicycle.showSpeed();
bicycle.speedUp();
bicycle.showSpeed();
bicycle.slowDown();
bicycle.showSpeed();
