"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`${this.type}`);
    }
}
class PartimeJob extends Job {
    constructor(workingHour, type) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
const partTime = new PartimeJob(20, "bibabibo");
partTime.printType();
console.log(`${partTime.calculateSalary()}`);
const fullTime = new FulltimeJob("bibobob");
fullTime.printType();
console.log(`${fullTime.calculateSalary()}`);
