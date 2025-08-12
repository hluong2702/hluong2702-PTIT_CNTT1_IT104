abstract class Person{
    name:string;

    constructor(name:string){
        this.name = name;
    }

    displayInfo():void{
        console.log(`${this.name}`);
    }
}

class Student extends Person{
    id:number;

    constructor(name:string,id:number){
        super(name);
        this.id = id;
    }

    displayInfo(): void {
        console.log(`${this.id}-${this.name}`);
    }
}

class Teacher extends Person{
    subject:string;

    constructor(name:string,subject:string){
        super(name);
        this.subject = subject;
    }

    displayInfo(): void {
        console.log(`${this.name}-${this.subject}`);
    }
}

const student = new Student("bibabibo",1);
student.displayInfo();

const teacher = new Teacher("bibo","Math");
teacher.displayInfo();
