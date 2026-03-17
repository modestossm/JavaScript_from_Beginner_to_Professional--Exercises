// Use querySelector() to enable single element selection:

// 1. Create another simple HTML file.
// 2. Create four HTML elements adding the same class to each. They can be different tag names as long as they have the class within the element attribute.
// 3. Add some content within each element so you can distinguish between them.
// 4. Within a script element, use querySelector() to select the first occurrence of the elements with that class and store it in a variable. If there is more than one matching result in querySelector(), it will return the first one.
// 5. Output the element into the console.

const elements = document.querySelector(".something");

console.log(elements);
console.log(elements.innerHTML);