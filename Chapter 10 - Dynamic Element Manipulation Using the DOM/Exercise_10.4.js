// Select all matching page elements using the class name of the element. 

// 1. Create a simple HTML file to work on.
// 2. Add three HTML elements adding the same class to each. You can use different tags as long as the same element class is included. Add some content within each element so you can distinguish between them.
// 3. Add a script element to your file, and within it select the page elements by class name. Assign the resulting HTMLCollection values to a variable.
// 4. You can use an index value to select the individual HTMLCollection items, just as you would for array items. Starting with an index of 0, select one of the page elements with the class name and output the element into the console.

const elements = document.getElementsByClassName("something");
console.log(elements[0]);
console.log(elements[0].innerHTML);