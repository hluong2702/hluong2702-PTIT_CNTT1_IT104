const isValidNumber = (value : number| string) : number => {
    if (typeof value === "number") {
        if (isNaN(value)) {
            throw new Error("Khong hop le");
            
        }
        return value;
    }

    if (typeof value ==="string") {
        const box = value.trim();
        if (box ==="") {
            throw new Error("Khong hop le");
        }
        const num = Number(box);
        if (isNaN(num)) {
            throw new Error("Khong the chuyen doi thanh so");
        }
        return num;
    }
    throw new Error("Khong hop le");
}

const sum = (a:number | string, b:number| string) : number | string => {
   try {
        const number1 = isValidNumber(a);
        const number2 = isValidNumber(b);
        return number1 + number2;
    } catch (error) {
        return`Khong hop le`;
    }
}

const subTract = (a:number | string, b:number| string) : number | string =>{
   try {
        const number1 = isValidNumber(a);
        const number2 = isValidNumber(b);
        return number1 - number2;
    } catch (error) {
        return`Khong hop le`;
    }
}

const core = (a:number | string, b:number| string) => {
   try {
        const number1 = isValidNumber(a);
        const number2 = isValidNumber(b);
        return number1 * number2;
    } catch (error) {
        return`Khong hop le`;
    }
}   

const division = (a:number | string, b:number| string) => {
    try {
        const number1 = isValidNumber(a);
        const number2 = isValidNumber(b);
        if (number2 === 0) {
            return`Khong hop le`
        }
        return number1 / number2;
    } catch (error) {
        return`Khong hop le`
    }
}

console.log(sum(5, 3));          
console.log(sum("5", "3"));       
console.log(sum(5, "3"));         
console.log(sum("abc", 3));

console.log(subTract(10, 4));     
console.log(subTract("10", "4")); 
console.log(subTract("15", 5));
console.log(subTract("", 5));

console.log(core(6, 7));      
console.log(core("6", "7"));  
console.log(core("3.5", 2));
console.log(core("xyz", 2));

console.log(division(15, 3));       
console.log(division("15", "3"));   
console.log(division(10, "2"));     
console.log(division(10, 0));
console.log(division("abc", 5));