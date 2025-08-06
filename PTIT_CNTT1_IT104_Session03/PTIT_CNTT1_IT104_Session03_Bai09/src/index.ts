const isValidNumber = (value: number | string): number | string => {
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
    } catch (error) {
        return "Khong hop le";
    }
};

const sum = (a: number | string, b: number | string): number | string => {
    const number1 = isValidNumber(a);
    const number2 = isValidNumber(b);
    if (typeof number1 === "string" || typeof number2 === "string") {
        return "Khong hop le";
    }
    return (number1 as number) + (number2 as number);
};

const subtract = (a: number | string, b: number | string): number | string => {
    const number1 = isValidNumber(a);
    const number2 = isValidNumber(b);
    if (typeof number1 === "string" || typeof number2 === "string") {
        return "Khong hop le";
    }
    return (number1 as number) - (number2 as number);
};

const multiply = (a: number | string, b: number | string): number | string => {
    const number1 = isValidNumber(a);
    const number2 = isValidNumber(b);
    if (typeof number1 === "string" || typeof number2 === "string") {
        return "Khong hop le";
    }
    return (number1 as number) * (number2 as number);
};

const division = (a: number | string, b: number | string): number | string => {
    const number1 = isValidNumber(a);
    const number2 = isValidNumber(b);
    if (typeof number1 === "string" || typeof number2 === "string") {
        return "Khong hop le";
    }
    if ((number2 as number) === 0) {
        return "Khong hop le";
    }
    return (number1 as number) / (number2 as number);
};

const factorial = (a: number | string): number | string => {
    const num = isValidNumber(a);
    if (typeof num === "string") {
        return "Khong hop le";
    }
    const n = num as number;
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

const sqrt = (a: number | string, b: number | string): number | string => {
    const numBase = isValidNumber(a);
    const numRoot = isValidNumber(b);
    if (typeof numBase === "string" || typeof numRoot === "string") {
        return "Khong hop le";
    }
    const base = numBase as number;
    const root = numRoot as number;
    if (root === 0) {
        return "Khong hop le";
    }
    if (base < 0 && root % 2 === 0) {
        return "Khong hop le";
    }
    return Math.pow(base, 1 / root);
};

const calculate = (operation: string): void => {
    const input1 = (document.getElementById("input1") as HTMLInputElement).value;
    const input2 = (document.getElementById("input2") as HTMLInputElement).value;
    const resultDiv = document.getElementById("result") as HTMLDivElement;

    let result: number | string;
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
