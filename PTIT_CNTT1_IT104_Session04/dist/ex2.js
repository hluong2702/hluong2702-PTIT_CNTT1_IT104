"use strict";
const listNumber = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let total = 0;
for (let index = 0; index < listNumber.length; index++) {
    total += listNumber[index];
}
console.log("Diem trung bimh: ", total / listNumber.length);
