const findElement = <T> (arr:T[],value:T) : T | undefined =>{
    return arr.find(item => item === value);
};

const numberArr:number[] = [1,2,3,4,5];
console.log(findElement(numberArr,3));

