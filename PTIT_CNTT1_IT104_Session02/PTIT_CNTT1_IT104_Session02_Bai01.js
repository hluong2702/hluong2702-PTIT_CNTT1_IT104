const sum = (arr) =>{
    let total = 0;
    for (const number of arr) {
        if (number %2 == 0) {
            total += number;
        }
    }
    return total;
}
console.log(sum([1,2,3,4,5,6]));
