class Vehicle{
    protected name:string;
    protected speed:number;
    protected id:string;

    constructor(name:string,speed:number,id:string){
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    slowDown():number{
        return this.speed -= 10;
    }

    speedUp():number{
        return this.speed +=10;
    }

    showSpeed():void{
        console.log(`${this.speed}`);
    }
}

class Bicycle extends Vehicle{
    private gear:number;

    constructor(name:string,speed:number,id:string,gear:number){
        super(name,speed,id);
        this.gear = gear;
    }

}

const bicycle = new Bicycle("bibabibo",50,"Mx01",100);
bicycle.showSpeed();
bicycle.speedUp();
bicycle.showSpeed();
bicycle.slowDown();
bicycle.showSpeed();
