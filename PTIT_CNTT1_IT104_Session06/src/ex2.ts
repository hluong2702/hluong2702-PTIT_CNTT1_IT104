abstract class Job {
    type:string;

    constructor(type:string){
        this.type = type;
    }

    printType():void{
        console.log(`${this.type}`);
    }

    abstract calculateSalary():number;
}

class PartimeJob extends Job{
    workingHour:number;

    constructor(workingHour:number,type:string){
        super(type);
        this.workingHour = workingHour;
    }

    calculateSalary():number{
        return 30000 * this.workingHour;
    }
}

class FulltimeJob extends Job{
    constructor(type:string){
        super(type);
    }

    calculateSalary(): number {
        return 10000000;
    }
}

const partTime = new PartimeJob(20,"bibabibo");
partTime.printType();
console.log(`${partTime.calculateSalary()}`);


const fullTime = new FulltimeJob("bibobob");
fullTime.printType();
console.log(`${fullTime.calculateSalary()}`);
