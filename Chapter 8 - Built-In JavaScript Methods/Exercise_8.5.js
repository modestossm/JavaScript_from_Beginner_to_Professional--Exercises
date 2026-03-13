// Using the replace() string method, complete this vowel replacer exercise by replacing the vowels in a string with numbers.

// 1. Create the previously specified string, and convert it to lowercase.
// 2. Create an array containing the vowels: a, e, i, o, u.
// 3. Loop through each letter you have in the array, and output the current letter into the console so that you can see which letter will be converted.
// 4. Within the loop, using replaceAll() update each vowel substring with the index value of the letter from the vowel array.
// 5. Once the loop completes output the result of the new string into the console.

let str = "I love JavaScript";

const arr = ["a", "e", "i", "o", "u"];

arr.forEach((e, i) => {
    console.log(e, "=", i);
    str = str.replaceAll(e, i);
});

console.log(str);