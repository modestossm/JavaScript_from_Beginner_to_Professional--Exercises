// We will be implementing shapes and using the HTML5 canvas element to draw on a webpage with JavaScript.
// Draw a rectangle using JavaScript.

// 1. Add the canvas element to the page.
// 2. Set the width and height to 640 px and, using CSS, add a 1 pc border to the element.
// 3. Within the JavaScript, select the canvas element and set the Context to 2d.
// 4. Set the fill style to red.
// 5. Create an output of the shape by using a rectangle.
// 6. Set the outline of the rectangle.
// 7. Clear the rectangle inside to make it transparent and the color of the background.

let canvas = document.getElementById("canva");

let ctx = canvas.getContext("2d");

canvas.width = 640; //px
canvas.height = 640; //px
ctx.fillStyle = "red";
ctx.strokeRect(90, 90, 520, 320);
ctx.fillRect(100, 100, 500, 300);  
ctx.clearRect(150, 150, 400, 200);