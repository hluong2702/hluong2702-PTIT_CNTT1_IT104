type CallbackType = (result: string) => void;

const checkCondition = (condition: boolean, callback: CallbackType): void => {
    setTimeout(() => {
        const result = condition ? " is true" : "is false";
        callback(result);
    }, 1000);
};

const logResult = (result: string): void => {
    console.log(result);
};

checkCondition(true, logResult);
checkCondition(false, logResult);