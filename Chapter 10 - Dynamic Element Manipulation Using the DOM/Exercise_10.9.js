// Try an alternative way to implement similar logic to Practice exercise 10.7.
// Use the following HTML code as a template for this exercise, and add the contents of the script element:

// 1. Select all the page buttons into a JavaScript object.
// 2. Loop through each button, and create a function within the button scope called output.
// 3. Within the output() function, add a console.log() method that outputs the current object's textContent. You can reference the current parent object using the this keyword.
// 4. As you loop through the buttons attach an event listener that when clicked invokes the output() function.

const btn = document.querySelectorAll("button");

btn.forEach(e => {
    function output() {
        console.log(this.textContent)
    }

    e.addEventListener("click", output);
});