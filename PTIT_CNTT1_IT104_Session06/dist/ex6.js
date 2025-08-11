"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
class Classroom {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        const student = this.students.find(student => student.getId() === id);
        if (student) {
            console.log(`${student.getId()}-${student.getName()}`);
        }
        else {
            console.log(`Khong tim thay`);
        }
    }
    addStudentInClass(studentId) {
        const studentIndex = allStudents.findIndex(student => student.getId() === studentId);
        if (studentIndex === -1) {
            console.log("Khong tim thay");
            return;
        }
        const student = allStudents[studentIndex];
        const existStudent = this.students.find(student => student.getId() === studentId);
        if (existStudent) {
            console.log(`${student.getName()} da co trong lop `);
            return;
        }
        this.students.push(student);
        allStudents.splice(studentIndex, 1);
    }
    showStudents() {
        this.students.forEach(student => {
            console.log(`${student.getId()}-${student.getName()}`);
        });
    }
}
const allStudents = [];
const student1 = new Student(1, "Nguyễn Văn An");
const student2 = new Student(2, "Trần Thị Bình");
const student3 = new Student(3, "Lê Văn Cường");
const student4 = new Student(4, "Phạm Thị Dung");
const student5 = new Student(5, "Hoàng Văn Em");
const student6 = new Student(6, "Ngô Thị Tú");
allStudents.push(student1, student2, student3, student4, student5, student6);
const classA = new Classroom();
const classB = new Classroom();
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
classA.showStudents();
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);
classB.showStudents();
