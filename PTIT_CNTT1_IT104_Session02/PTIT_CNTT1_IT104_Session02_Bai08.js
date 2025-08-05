const numbers = [1,2,3,4,5];
const [number1,number2,number3,...rest] = numbers;

const displayUserInfor = (user) => {
  let { name, age, location, contact = {}, job = {} } = user;
  let { city, country } = location;
  let { email = "unknown", phone = "unknown" } = contact;
  let { title = "unknown", company = "unknown" } = job;
  return `${name} is ${age} years old, lives in ${city}, ${country}, works as ${title} at ${company}, and can be contacted via ${email} or ${phone}.`;
};

console.log(displayUserInfor({ 
    name: "Anna", 
    age: 30, 
    location: { city: "Da Nang", country: "Vietnam" } 
}));
console.log(displayUserInfor({ 
    name: "John", 
    age: 25, 
    location: { city: "Hanoi", country: "Vietnam" }, 
    contact: { email: "john@example.com", phone: "0123456789" }, 
    job: { title: "Developer", company: "Tech Corp" } 
}));