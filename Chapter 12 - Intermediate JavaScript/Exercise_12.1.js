// Find and replace strings. The following exercise involves replacing characters in a specified string value. 
// The first input field will indicate which character string will be replaced, and the second input field will indicate which characters will replace them once the button is clicked.

// 1. Select each of the three page elements using JavaScript and assign the element objects as variables so that they can be easily referenced in your code.
// 2. Add an event listener to the button to invoke a function when clicked.
// 3. Create a function named lookup() that will find and replace the text in the output element. Assign the output element's text content to a variable named s, and then assign the value of the input we are replacing to another variable named rt.
// 4. Create a new regex with the value of the first input field, which will allow you to replace the text. Using the regex, check for a match with the match() method. Wrap this with a condition that will execute a block of code if matches are found.
// 5. If the match is found, use replace() to set the new value.
// 6. Update the output area with the newly created and updated text output.

const output = document.getElementById("output");
const findValue = document.getElementById("sText");
const replaceValue = document.getElementById("rText");

document.querySelector("button").addEventListener("click", lookUp);

function lookUp() {
    const s = output.textContent;
    const rt = replaceValue.value;
    const re = new RegExp(findValue.value, "gi");

    if (s.match(re)) {
        let newValue = s.replace(re, rt);
        output.textContent = newValue;
    }
}