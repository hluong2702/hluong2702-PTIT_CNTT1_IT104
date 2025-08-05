const checkEndString = (longString, shortString) => {
    return longString.endsWith(shortString);
};

console.log(checkEndString("Hello, World!", "Hello"));
console.log(checkEndString("Hi there!", "there!")); 