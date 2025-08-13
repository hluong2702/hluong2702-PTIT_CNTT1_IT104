const merge = <T>(obj1:T[][]):T[]=>{
    const newArray = obj1.reduce((acc,cur)=>{
        return [...acc,...cur];
    },[])
    return newArray;
}

const arr = [[1, 2], [3, 4], [5,6]];
console.log(merge(arr));
