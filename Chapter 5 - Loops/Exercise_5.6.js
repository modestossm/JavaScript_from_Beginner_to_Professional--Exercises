// 1. Create an empty array
// 2. Run a loop 10 times, adding a new incrementing value to the array
// 3. Log the array into the console
// 4. Use the for loop to iterate through the array (adjust the number of iterations to however many values are in your array) and output into the console
// 5. Use the for of loop to output the value into the console from the array

let arr = [];

for(let i = 0; i < 10; i++) {
    arr.push("V" + i);
}
console.log(arr);

for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);
}

console.log(" ");

for(let iterate of arr) {
    console.log(iterate);
}