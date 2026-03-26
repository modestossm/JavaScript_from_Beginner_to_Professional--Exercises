// We will work with text and add text to your canvas element.
// The following exercise will demonstrate how to dynamically add text and position it within your canvas element. 

// 1. Create a simple HTML document, and add the canvas element to your page. Set the height and width to 640, and add a 1 px border to the element so you can see it on the page.
// 2. Select the page elements as values within JavaScript variables.
// 3. Create a string variable with the message Hello World.
// 4. Set a font style using the font property and a blue fill color using the fillStyle property. You can also align the text to the left.
// 5. Add the text to the canvas with fillText and set the x and y positions of the text.
// 6. Set a new font and color of red.
// 7. Create a loop and, using the value of the loop variable, add text to the page canvas element.

const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");

canvas.width = 640; //px
canvas.height = 640; //px

let text;
let counter = 0;

for(let i = 0; i < 20; i++) {
    text = "Hello World: " + counter;
    ctx.fillStyle = "red";
    ctx.font = "16px Arial";
    ctx.textAlign = "left";
    ctx.fillText(text, 100, 50 + i * 25);
    counter++
}

