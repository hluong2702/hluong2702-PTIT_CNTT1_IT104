type CallbackType = (num: number) => void;

const processArray = (numbers: number[], callback: CallbackType): void => {
    numbers.forEach((num, index) => {
        setTimeout(() => {
            callback(num);
        }, (index + 1) * 1000);
    });
}

const logNumber = (num: number): void => {
    console.log(num);
};

processArray([1, 2, 3], logNumber);