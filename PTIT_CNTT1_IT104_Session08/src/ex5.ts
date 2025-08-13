const findFirst = <T extends number> (arr:T[]) : T | undefined=>{
    return arr.find(item1 => item1 % 2 === 0)
}

const number:number[] = [2,4,6,1,2];
console.log(findFirst(number));
