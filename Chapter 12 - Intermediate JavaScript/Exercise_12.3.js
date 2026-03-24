// This exercise will demonstrate using the array-like arguments object and extracting values from it.
// Using the arguments length property, we will iterate through the items in the arguments and return the last item in the list

// 1. Create a function without any parameters. Create a loop to iterate through the length of the arguments object. This will allow an iteration of each item of the arguments in the function.
// 2. Set up a variable called lastOne with a blank value.
// 3. As you loop through the arguments, set lastOne to the current value of the argument using the index of i to return the argument value. The argument will have an index value that can be used to reference the value as you iterate through the arguments object.
// 4. Return the value of lastOne, which should only return the last argument value as the response.
// 5. Output the response from the function, pass a number of arguments into the function, and console log the response result. You should see only the last item in the list. If you want to see each one, you can output them separately to the console as you look through the values, or construct an array that can then be returned, adding each one as you go through the arguments.

let lastOne = "";

function names() {
    for (let i = 0; i < arguments.length; i++) {
        lastOne = arguments[i];
    }
    return lastOne;
}

console.log(names("JavaScript", "TypeScript", "Python", "Golang"));