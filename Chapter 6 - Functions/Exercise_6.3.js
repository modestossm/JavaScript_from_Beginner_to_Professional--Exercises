// 1. Set up two variables containing number values.
// 2. Set up a variable to hold an operator, either + or -.
// 3. Create a function that retrieves the two values and the operator string value within its parameters. Use those values with a condition to check if the operator is + or -, and add or subtract the values accordingly (remember if not presented with a valid operator, the function should default to addition).
// 4. Within console.log(), call the function using your variables and output the response to the console.
// 5. Update the operator value to be the other operator type—either plus or minus—and call to the function again with the new updated arguments.

let var1 = 10;
let var2 = 100;

let operator = "+";

function check(a, b) {
    if(operator === "+") {
        return a + b;
    } else {
        return a - b;
    }
}

console.log(check(var1, var2));


