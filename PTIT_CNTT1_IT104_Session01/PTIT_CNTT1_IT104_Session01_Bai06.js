const createUsers = (name , age= 18,role = "user") =>{
    return{name,age,role};
};
console.log(createUsers("Dev"));
console.log(createUsers("Nguyen Van A",20,"Admin"));

