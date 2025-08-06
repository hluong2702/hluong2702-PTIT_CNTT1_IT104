const arr:string = "banana";
let box : string = "";
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (box.includes(element)) {
        continue;
    }else{
        box += element;
    }
}
console.log(box);
