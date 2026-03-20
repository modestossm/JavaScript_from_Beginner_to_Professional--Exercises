// 1. In the JavaScript code, select all the elements with the classes, and separately select the main container element.
// 2. Add event listeners to the main container, outputting to the console value of 4 for the useCapture argument set to false, and 1 for the useCapture argument set to true.
// 3. For each of the nested elements, add click event listeners with a console.log() value of 3 for the useCapture argument set to false, and 2 for useCapture set to true.
// 4. Click the page elements to see the event delegation and order of output on the page.
// 5. Within the box elements on both click events, add to the console an output for the event target's textContent value.

let divs = document.querySelectorAll(".box");

let container = document.querySelector(".container");

container.addEventListener("click", (e) => {
    console.log("4");
}, false);

container.addEventListener("click", (e) => {
    console.log("1");
},true);

divs.forEach(elements => {
    elements.addEventListener("click", (e) => {
    console.log("3");
    console.log(e.target.textContent)}, false);

    elements.addEventListener("click", (e) => {
    console.log("2");
    console.log(e.target.textContent)}, true);
});