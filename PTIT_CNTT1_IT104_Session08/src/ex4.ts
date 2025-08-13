const merge1 = <T,U>(obj1:T,obj2:U) : T & U => {
    return{...obj1,...obj2};
};

const obj1 ={name:"bibabibo"};
const obj2 ={age:18};

console.log(merge1(obj1,obj2));
