// 1. Create a recursive function

// Create a recursive function that counts up to 10.
// Invoke the function with different start numbers as the arguments that are passed into the function.
// The function should run until the value is greater than 10.

let start = 0;

function count(value) {
    console.log(value);
    if(value < 10) {
        return count(value + 1);
    } else {
        return
    }
};

count(start);
count("--------------");

// 2. Set timeout order

// Use the arrow format to create functions that output the values one and two to the console. 
// Create a third function that outputs the value three to the console, and then invokes the first two functions.
// Create a fourth function that outputs the word four to the console and also use setTimeout() to invoke the first function immediately and then the third function.
// What does your output look like in the console? Try to get the console to output:

let func1 = () => console.log('one');
let func2 = () => console.log('two');

function func3() {
    console.log('three');
    func1();
    func2();
};

function func4() {
    console.log('four');
    setTimeout(func1, 0);
    func3();
};

func4();