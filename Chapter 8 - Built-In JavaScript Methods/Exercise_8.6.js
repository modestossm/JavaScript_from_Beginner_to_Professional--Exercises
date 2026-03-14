// Experiment with the Math object with these steps:

// 1. Output the value of PI into the console using Math.
// 2. Using Math get the ceil() value of 5.7, get the floor() value of 5.7, get the round value of 5.7, and output it into the console.
// 3. Output a random value into the console.
// 4. Use Math.floor() and Math.random() to get a number from 0 to 10.
// 5. Use Math.floor() and Math.random() to get a number from 1 to 10.
// 6. Use Math.floor() and Math.random() to get a number from 1 to 100.
// 7. Create a function to generate a random number using the parameters of min and max. Run that function 100 times, returning into the console a random number from 1 to 100 each time.

x= 5.7;

console.log(Math.PI);
console.log("-------------------");
console.log(Math.ceil(x));
console.log(Math.floor(x));
console.log(Math.round(x));
console.log("-------------------");
console.log(Math.random());
console.log("-------------------");
console.log(Math.floor(Math.random() * 11));
console.log(Math.floor((Math.random() * 10) + 1));
console.log(Math.floor((Math.random() * 100) + 1));
console.log("-------------------");

function random(min, max) {
    for(let i = 0; i < 100; i++) {
        console.log(Math.floor((Math.random() * (max - min + 1)) + min));
    }
}

random(0, 100);