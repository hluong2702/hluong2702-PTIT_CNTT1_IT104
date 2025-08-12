abstract class Animal{
    name:string;

    constructor(name:string){
        this.name = name;
    }

    printName():void{
        console.log(`${this.name}`);
        
    }

    abstract makeNoise():void;
}

class Cat extends Animal{
    constructor(name:string){
        super(name);
    }

    printName(): void {
        console.log(`${this.name}`);
    }

    makeNoise(): void {
        console.log(`meo meo`);
        
    }

}

class Dog extends Animal{
    constructor(name:string){
        super(name);
    }

    printName(): void {
        console.log(`${this.name}`);
    }

    makeNoise(): void {
        console.log(`gau gau`);
    }

}

const meo = new Cat("bibabibo");
meo.printName();
meo.makeNoise();

const dog = new Dog("bibo");
dog.printName();
dog.makeNoise();


