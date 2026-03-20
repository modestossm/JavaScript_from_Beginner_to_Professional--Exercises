// By recognizing key presses and detecting the values of characters as key presses occur with the element in focus, we can also detect if content is pasted into an input field.

// 1. Create two input fields within your HTML. Add an element to output content too.
// 2. Using JavaScript, select the page elements. You can assign a variable called output to the element with a class of output. Create another variable, eles, and select all the input fields (using querySelectorAll()) as its value. This way, we can loop through the node list and assign the same events to all the matching elements.
// 3. Using forEach(), iterate through all the input elements from the page. Add the same event listeners to all of them.
// 4. Add a keydown event listener and check if the value is a number. If it is a number, then add it to the output area.
// 5. On keyup, output to the console the value of the key.
// 6. Check if there was a paste in the input field; if there was, then you can output the word paste to the console.

let output = document.querySelector(".output");

let myNum = document.querySelectorAll("input");

myNum.forEach(element => {
    element.addEventListener('keydown', (e) => {
        if(!isNaN(e.key)) {
            output.textContent += e.key; 
        };
    });
    
    element.addEventListener("keyup", (e) => {
        console.log(e.key);
    });

    element.addEventListener("paste", (e) => {
        console.log('pasted');
    });
});