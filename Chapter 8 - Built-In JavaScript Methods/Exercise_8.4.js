// 1. Create a string with several words that have letters with different cases, a mix of upper and lowercase words.
// 2. Create a function that gets a string as an argument, which will be the value that we will manipulate.
// 3. In the function first transform everything to lowercase letters.
// 4. Create an empty array that can hold the values of the words when we capitalize them.
// 5. Convert the phrase into words in an array using the split() method.
// 6. Loop through each one of the words that are now in the new array, so you can select each one independently. You can use forEach() for this. Again, a more performance-friendly alternative is to use regex. Getting excited for Chapter 12, Intermediate JavaScript, yet?
// 7. Using slice() isolate the first letter in each word, then transform it to uppercase. Again using slice(), get the remaining value of the word without including the first letter. Then concatenate the two together to form the word that is now capitalized.
// 8. Add the new capitalized word into the blank array that you created. By the end of the loop you should have an array with all the words as separate items in the new array.
// 9. Take the array of updated words and using the join() method, transform them back into a string with spaces between each word.
// 10. Return the value of the newly updated string with capitalized words that can then be output into the console.

let string = "thIs will be capiTalized for each word";

// let x = string.charAt(0).toUpperCase().concat(string.slice(1));
// console.log(x);

function upperStr(param) {
    let str = param.toLowerCase();

    const arr = [];
    
    let words = str.split(" ");
    
    words.forEach(e => {
        let upper = e.charAt(0).toUpperCase().concat(e.slice(1));
        arr.push(upper);
    });

    return arr.join(" ");
}

console.log(upperStr(string));