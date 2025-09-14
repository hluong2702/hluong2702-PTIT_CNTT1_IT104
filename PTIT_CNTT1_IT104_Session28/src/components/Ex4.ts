type CallbackType = (num: number) => void;

const displayNumbers = (callback: CallbackType, delay: number): void => {
    let currentNumber = 1;

    const printNextNumber = (): void => {
        callback(currentNumber);
        currentNumber++;
        setTimeout(printNextNumber, delay);
    };

    setTimeout(printNextNumber, delay);
};

const logNumber = (num: number): void => {
    console.log(num);
};

displayNumbers(logNumber, 1000);