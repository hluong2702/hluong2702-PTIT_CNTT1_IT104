"use strict";
const displayInfor = (student) => {
    console.log(`Ten toi la ${student.name}, toi ${student.age} tuoi va email cua toi la ${student.email}`);
};
const student = {
    name: "bibabibo",
    age: 18,
    email: "bibabibo@gmail.com"
};
displayInfor(student);
