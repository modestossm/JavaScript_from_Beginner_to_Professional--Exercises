// 1. Create a simple object with three items in it.
// 2. Using the for in loop, get the properties' names and values from the object and output them into the console.
// 3. Create an array containing the same three items. Using either the for loop or the for in loop, output the values from the array into the console.

let car = {
model: "Golf",
make: "Volkswagen",
year: 1999,
};

for(let prop in car) {
    console.log(prop + ": " + car[prop]);
}
console.log(" ");

const arr = ["model", "make", "year"];

for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}
console.log(" ");

for (elememt in arr) {
    console.log(elememt, arr[elememt]);
}