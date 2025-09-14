type CallbackType = () => void;

const delayedCallback = (callback: CallbackType, delay: number): void => {
    setTimeout(callback, delay);
}

const logMessage = (): void => {
    console.log("Callback được gọi sau thời gian delay!");
};

delayedCallback(logMessage, 1000);
delayedCallback(logMessage, 2000);