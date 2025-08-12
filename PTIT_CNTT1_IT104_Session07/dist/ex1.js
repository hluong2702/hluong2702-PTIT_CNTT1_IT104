"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfor() {
        console.log(`${this.name}-${this.company}-${this.phone}`);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfor() {
        super.printInfor();
        console.log(`${this.teamSize}`);
    }
}
const employee1 = new Employee("Bibabibo", "FPT", "0367771862");
employee1.printInfor();
const employee2 = new Manager("Bibo", "FPT", "123456789", 27);
employee2.printInfor();
