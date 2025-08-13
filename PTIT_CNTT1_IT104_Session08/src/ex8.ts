const partialUpdate = <T>(obj:T,updates:T) : T =>{
    return {...obj,...updates};
}

console.log(partialUpdate({name:'bibabibo',age:18},{age:19}));
