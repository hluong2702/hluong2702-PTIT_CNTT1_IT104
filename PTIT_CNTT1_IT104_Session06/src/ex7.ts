class Student1 {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
}

let allStudents1: Student1[] = [];

class Classroom1 {
    students: Student1[];

    constructor() {
        this.students = [];
    }

    addStudent(student: Student1): void {
        this.students.push(student);
    }

    filterStudent(id: number): void {
        const student = this.students.find(student => student.getId() === id);
        if (student) {
            console.log(`${student.getId()}-${student.getName()}`);
        } else {
            console.log(`Không tìm thấy`);
        }
    }

    addStudentInClass(studentId: number): void {
        const studentIndex = allStudents1.findIndex(student => student.getId() === studentId);
        if (studentIndex === -1) {
            console.log(`Không tìm thấy`);
            return;
        }
        const student = allStudents1[studentIndex];
        const existStudent = this.students.find(student => student.getId() === studentId);
        if (existStudent) {
            console.log(`${student.getName()} đã có trong lớp`);
            return;
        }

        this.students.push(student);
        allStudents1.splice(studentIndex, 1);
    }

    showStudents(): void {
        if (this.students.length === 0) {
            console.log("Lớp hiện không có học sinh.");
            return;
        }
        this.students.forEach(student => {
            console.log(`${student.getId()}-${student.getName()}`);
        });
    }

    removeStudent(studentId: number): void {
        const studentIndex = this.students.findIndex(student => student.getId() === studentId);
        if (studentIndex === -1) {
            console.log(`Không tìm thấy ${studentId} trong lớp`);
            return;
        }
        const student = this.students[studentIndex];
        this.students.splice(studentIndex, 1);
        allStudents1.push(student);
    }

    editStudent(studentId: number, newName: string): void {
        const student = this.students.find(student => student.getId() === studentId);
        if (!student) {
            console.log(`Không tìm thấy học sinh với ID ${studentId} trong lớp`);
            return;
        }
        student.setName(newName);
    }
}

const student7 = new Student1(1, "Nguyễn Văn An");
const student8 = new Student1(2, "Trần Thị Bình");
const student9 = new Student1(3, "Lê Văn Cường");
const student10 = new Student1(4, "Phạm Thị Dung");
const student11 = new Student1(5, "Hoàng Văn Em");
const student12 = new Student1(6, "Ngô Thị Tú");

allStudents1.push(student7, student8, student9, student10, student11, student12);
const classC = new Classroom1();
const classD = new Classroom1();

classC.addStudentInClass(1);
classC.addStudentInClass(2);
classC.addStudentInClass(3);
classC.showStudents();

classD.addStudentInClass(4);
classD.addStudentInClass(5);
classD.addStudentInClass(6);
classD.showStudents();

classC.editStudent(1,"Bibabibo");
classC.showStudents();