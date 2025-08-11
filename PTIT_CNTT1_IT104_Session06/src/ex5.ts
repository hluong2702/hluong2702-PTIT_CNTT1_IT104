interface changeSpeed {
    speedUp():void;
    slowDown():void;
    stop():void;
}

class Vehicle implements changeSpeed{
    private speed : number;

    constructor(speed:number){
        this.speed = speed;
    }

    getSpeed(): number {
        return this.speed;
    }

    slowDown(): number{
        return this.speed -= 10;
    }

    stop():number{
        return this.speed = 0;
    }

    speedUp():number{
        return this.speed +=10
    }
}

const vehicle1 = new Vehicle(30);
console.log(vehicle1.slowDown());
console.log(vehicle1.stop());
console.log(vehicle1.speedUp());
