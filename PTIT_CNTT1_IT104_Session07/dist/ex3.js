"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`${this.name}`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    printName() {
        console.log(`${this.name}`);
    }
    makeNoise() {
        console.log(`meo meo`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    printName() {
        console.log(`${this.name}`);
    }
    makeNoise() {
        console.log(`gau gau`);
    }
}
const meo = new Cat("bibabibo");
meo.printName();
meo.makeNoise();
const dog = new Dog("bibo");
dog.printName();
dog.makeNoise();
