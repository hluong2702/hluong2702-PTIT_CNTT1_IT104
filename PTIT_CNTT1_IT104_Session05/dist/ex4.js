"use strict";
class Vehicle1 {
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printInfor() {
        return `${this.id}-${this.name}-${this.year}-${this.company}`;
    }
}
const vehicle3 = new Vehicle1(1, "Bibabibo", 2025, "Ferari");
console.log(vehicle3.printInfor());
