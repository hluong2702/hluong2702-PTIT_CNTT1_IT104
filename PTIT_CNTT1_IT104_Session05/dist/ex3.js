"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        return `${this.name}-${this.company}-${this.phone}`;
    }
}
const employee = new Employee("Bibabibo", "lala", 123456789);
console.log(employee.printInfo());
