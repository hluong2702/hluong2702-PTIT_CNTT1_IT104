"use strict";
const isValidNumber = (value) => {
    try {
        if (typeof value === "number") {
            if (isNaN(value)) {
                return "Khong hop le";
            }
            return value;
        }
        if (typeof value === "string") {
            const box = value.trim();
            if (box === "") {
                return "Khong hop le";
            }
            const num = Number(box);
            if (isNaN(num)) {
                return "Khong the chuyen doi thanh so";
            }
            return num;
        }
        return "Khong hop le";
    }
    catch (error) {
        return "Khong hop le";
    }
};
const sum = (a, b) => {
    const number1 = isValidNumber(a);
    const number2 = isValidNumber(b);
    if (typeof number1 === "string" || typeof number2 === "string") {
        return "Khong hop le";
    }
    return number1 + number2;
};
const subtract = (a, b) => {
    const number1 = isValidNumber(a);
    const number2 = isValidNumber(b);
    if (typeof number1 === "string" || typeof number2 === "string") {
        return "Khong hop le";
    }
    return number1 - number2;
};
const multiply = (a, b) => {
    const number1 = isValidNumber(a);
    const number2 = isValidNumber(b);
    if (typeof number1 === "string" || typeof number2 === "string") {
        return "Khong hop le";
    }
    return number1 * number2;
};
const division = (a, b) => {
    const number1 = isValidNumber(a);
    const number2 = isValidNumber(b);
    if (typeof number1 === "string" || typeof number2 === "string") {
        return "Khong hop le";
    }
    if (number2 === 0) {
        return "Khong hop le";
    }
    return number1 / number2;
};
const factorial = (a) => {
    const num = isValidNumber(a);
    if (typeof num === "string") {
        return "Khong hop le";
    }
    const n = num;
    if (n < 0) {
        return "Khong the tinh giai thua cua so am";
    }
    if (!Number.isInteger(n)) {
        return "Giai thua chi ap dung cho so nguyen";
    }
    if (n > 170) {
        return "So qua lon";
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};
const sqrt = (a, b) => {
    const numBase = isValidNumber(a);
    const numRoot = isValidNumber(b);
    if (typeof numBase === "string" || typeof numRoot === "string") {
        return "Khong hop le";
    }
    const base = numBase;
    const root = numRoot;
    if (root === 0) {
        return "Khong hop le";
    }
    if (base < 0 && root % 2 === 0) {
        return "Khong hop le";
    }
    return Math.pow(base, 1 / root);
};
const calculate = (operation) => {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const resultDiv = document.getElementById("result");
    let result;
    switch (operation) {
        case "add":
            result = sum(input1, input2);
            break;
        case "subtract":
            result = subtract(input1, input2);
            break;
        case "multiply":
            result = multiply(input1, input2);
            break;
        case "divide":
            result = division(input1, input2);
            break;
        case "factorial":
            result = factorial(input1);
            break;
        case "sqrt":
            result = sqrt(input1, input2);
            break;
        default:
            result = "Khong hop le";
    }
    resultDiv.innerText = `${result}`;
};
