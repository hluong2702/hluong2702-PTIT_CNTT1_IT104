const addArray = (arr1,arr2,index) =>{
    if (index < 0 || index > arr1.length) {
        console.log("Khong hop le");
    }
    return [...arr1.slice(0,index),...arr2,...arr1.slice(index)];
}

console.log(addArray([1,2,3,7,8],[4,5,6],3));
console.log(addArray(["a","b","e","f"],["c","d"],2));

