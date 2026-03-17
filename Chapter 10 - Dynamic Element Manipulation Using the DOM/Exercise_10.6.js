// Use querySelectorAll() to select all matching elements in an HTML file:

// 1. Create an HTML file and add four HTML elements, adding the same class to each one.
// 2. Add some content within each element so you can distinguish between them.
// 3. Within a script element, use QuerySelectorAll() to select all the matching occurrences of the elements with that class and store them in a variable.
// 4. Output all the elements into the console, first as an array and then looping through them to output them one by one.

const e = document.querySelectorAll(".this");

console.log(e);
console.log(e[0].innerHTML);

e.forEach(item => {
    console.log(item);
    console.log(item.innerHTML);
});