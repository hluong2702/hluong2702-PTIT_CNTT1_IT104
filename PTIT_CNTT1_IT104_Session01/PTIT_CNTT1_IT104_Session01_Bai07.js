const sumArrays = (...args) =>{
    return args.map(arr => arr.reduce((sum,num) => sum + num ,0));
};

console.log(sumArrays([1,2],[6,7,8],[12,8]));
