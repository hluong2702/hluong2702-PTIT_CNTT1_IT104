"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    getInfor() {
        return `${this.id}-${this.age}-${this.email}`;
    }
}
const student = [];
student.push(new Student(1, 18, "bibabibo@gmail.com"));
student.push(new Student(2, 18, "hoangluong@gmail.com"));
student.push(new Student(3, 19, "hiahihihi@gmail.com"));
console.log(student);
