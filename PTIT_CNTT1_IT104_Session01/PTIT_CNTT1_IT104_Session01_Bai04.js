const checkParity = (number) => {
    if (isNaN(number) || typeof number !== 'number') {
        console.log("a not is number");
        return;
    }
    if (number %2 == 0) {
        console.log(`${number} is an even number`);
    }else{
        console.log(`${number} is odd`);
    }
};
console.log(checkParity("abc"));
console.log(checkParity(4));
console.log(checkParity(7));


