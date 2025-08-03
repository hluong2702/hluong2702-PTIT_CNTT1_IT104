const sortArr = (arr1,arr2) =>{
    const combine = [...arr1,...arr2];
    return combine.sort((a,b)=> a - b);
};
console.log(sortArr([1,2,3,5,9],[4,6,7,8]));
