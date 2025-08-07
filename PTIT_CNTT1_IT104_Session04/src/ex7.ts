const processInput = (input:string | number | boolean) =>{
    if (typeof input === "string") {
        const isNumber = /^\d+$/.test(input);
        if (isNumber) {
            const num = parseInt(input);
            console.log(num * num);
        }else{
            const letterCount = (input.match(/[a-zA-Z]/g) || []).length;
            console.log(`${letterCount} ky tu chu cai`);
        }
    }

    if (typeof input === "number") {
        if (input <2) {
            return console.log(`${input}khong phai la so nguyen to`);
        }
        if (input === 2) {
            return console.log(`${input} la so nguyen to`);
        }
        if (input %2 === 0) {
            return console.log(`${input}khong phai la so nguyen to`);
        }
        const sqrt = Math.sqrt(input);
        for (let i = 3; i <= sqrt; i += 2) {
        if (input % i === 0) return console.log(`${input}khong phai la so nguyen to`);
        }
       return console.log(`${input}la so nguyen to`);
    }
    if (typeof input === "boolean") {
        console.log(input ? "Giá trị là true - tiến hành xử lý" : "Giá trị là false - dừng xử lý");
    }
}

processInput("123");          
processInput("abc123!");   
processInput(7);           
processInput(4);      
processInput(true);
processInput(false);