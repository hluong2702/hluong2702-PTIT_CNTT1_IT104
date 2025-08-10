class Student{
    id:number;
    age:number;
    email:string;

    constructor(id:number,age:number,email:string){
        this.id = id;
        this.age = age;
        this.email = email;
    }

    getInfor(): string{
        return`${this.id}-${this.age}-${this.email}`
    }
}

const student:Student[]=[];
student.push(new Student(1,18,"bibabibo@gmail.com"));
student.push(new Student(2,18,"hoangluong@gmail.com"));
student.push(new Student(3,19,"hiahihihi@gmail.com"));
console.log(student);

