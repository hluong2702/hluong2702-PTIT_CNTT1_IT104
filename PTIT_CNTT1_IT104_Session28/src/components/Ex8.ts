type CallbackType<T> = (element: T, searchValue: T, index: number, array: T[]) => boolean;

const myFilter = <T>(array: T[], searchValue: T, callback: CallbackType<T>): T[] => {
    const result: T[] = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], searchValue, i, array)) {
            result.push(array[i]);
        }
    }
    console.log(`Filtered result: [${result}], Original array: [${array}]`);
    return result;
};

const numbers: number[] = [1, 2, 2, 3, 4, 5, 6];

const callback: CallbackType<number> = (element, searchValue): boolean => {
    return element === searchValue;
};

const result1 = myFilter(numbers, 2, callback);
console.log("Result for search value 2:", result1);
const result2 = myFilter(numbers, 10, callback);
console.log("Result for search value 10:", result2);