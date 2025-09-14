type CallbackType<T> = (element: T, index: number, array: T[]) => void;

const myForEach = <T>(array: T[], callback: CallbackType<T>): void => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
};

const numbers: number[] = [1, 2, 3, 4, 5, 6];

const callback: CallbackType<number> = (element, index, array): void => {
    console.log(`Vị trí: ${index},Phần tử: ${element}, Mảng: [${array}]`);
};

myForEach(numbers, callback);