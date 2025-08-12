"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`${this.name}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`${this.id}-${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`${this.name}-${this.subject}`);
    }
}
const student = new Student("bibabibo", 1);
student.displayInfo();
const teacher = new Teacher("bibo", "Math");
teacher.displayInfo();
