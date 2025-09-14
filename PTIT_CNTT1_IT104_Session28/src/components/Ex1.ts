type callBackType = (result: number) => void;

const calculate = (a:number,b:number,callBack:callBackType) => {
    const sum = a+b;
    callBack(sum);
}

const handleLogSum = (result:number):void =>{
    console.log(result);
}

calculate(1,2,handleLogSum);
calculate(3,4,handleLogSum);