"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    getInfor() {
        return `${this.name}-${this.year}-${this.company}`;
    }
}
const vehicle1 = new Vehicle("bibabibbo", 2025, "Ferari");
const vehicle2 = new Vehicle("bibo", 2025, "Posrchers");
console.log(vehicle1.getInfor());
console.log(vehicle2.getInfor());
