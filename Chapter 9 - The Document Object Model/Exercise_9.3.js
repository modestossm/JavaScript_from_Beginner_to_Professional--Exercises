// Select a page element and update the content, change the style, and add attributes.
// Create an HTML file containing a page element with a class of output using the following code template:

// 1. Select the page element as a JavaScript object.
// 2. Update the textContent property of the selected page element.
// 3. Using the classList.add object method, add a class of red to the element.
// 4. Update the id property of the element to tester.
// 5. Through the style object, add a backgroundColor property of red to the page element.
// 6. Get the document URL via document.URL and update the text of the output element to contain the value of the document URL. You can log it in the console first to ensure you have the correct value.

let div = document.querySelector(".output");
console.log(div.textContent);

div.textContent = "My First Content";
console.log(div.textContent);

div.classList.add("red"); 
console.log(div.classList);

div.id = "tester";
console.log(div.id);

div.style.backgroundColor = "red";
console.log(div.style);

div.onclick = () => {
  div.togstyle.backgroundColor = '#f0f0f0'; // Fundo claro
  div.style.fontWeight = 'bold';        // Texto em negrito
};

const url = document.URL;
// div.textContent = url;
console.log(url);
