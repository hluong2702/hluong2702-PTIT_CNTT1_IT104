const handleUnionType =(input:number | string)=>{
    if (typeof input ==="string") {
        console.log(`${input.length} ki tu`);
    }

    if (typeof input ==="number") {
        if (input %2 === 0) {
            console.log("Day la so chan");
        }else{
            console.log("Day la so le");
        }
    }

}

handleUnionType("123456");
handleUnionType(10);