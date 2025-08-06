"use strict";
let firstName = "john";
let lastName = "doe";
if (firstName[0] !== firstName[0].toUpperCase()) {
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
}
if (lastName[0] !== lastName[0].toUpperCase()) {
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
const fullName = firstName + lastName;
console.log(fullName);
