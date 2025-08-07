type Student = {
    name:string,
    age:number,
    email:string
};

const displayInfor = (student:Student) =>{
    console.log(`Ten toi la ${student.name}, toi ${student.age} tuoi va email cua toi la ${student.email}` );
}

const student : Student = {
    name:"bibabibo",
    age:18,
    email:"bibabibo@gmail.com"
};

displayInfor(student);