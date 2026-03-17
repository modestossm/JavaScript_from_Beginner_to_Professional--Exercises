// In this exercise, experiment with traversing the DOM hierarchy. Take the following steps:

// 1. Create and open the above sample web page, or visit your favorite website, and open the document body in the console with console.dir(document).
// 2. In the body.children property, select some of the child elements. View how they match the page content.
// 3. Navigate to and output the next nodes or elements into the console.

console.dir(document);

document.body.children[0].children[0].children[0].children[1].innerHTML; // "Two" 

document.body.children[0].children[0].children[0].children[1].nextElementSibling.innerHTML; // "Three"