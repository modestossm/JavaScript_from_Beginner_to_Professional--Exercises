// 1. Using throw, try, and catch, check if the value is a number, and if it's not, then create a custom error.
// 2. Create a function with one argument called val.
// 3. Use try, and within it add a condition that checks whether val is a number using isNaN. If true, then throw an error that states that it is not a number. Otherwise, output Got a number to the console.
// 4. Use catch to catch any errors and output the error values to the console.
// 5. Add finally to run and output the value, and when the function has completed, also include the value of val.
// 6. Create one request to the function with a string argument and another with a number. See the results in the console.


function isNumber(val) {
    try {
        if(typeof(val) === "number") {
            return console.log("It's a number :)");
        } else {
            throw TypeError("The value must be a number!");
        }
    }   catch (e) {
        console.log("Type Error!");
    }   finally {
        console.log("Error or no error, I will be logged!");
    }    
};

isNumber(true);
console.log("--------------");
isNumber(7);
console.log("--------------");
isNumber("Hello World");