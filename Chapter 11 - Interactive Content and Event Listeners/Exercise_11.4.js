// 1. Create a blank element on the page and assign a class to it.
// 2. Select the element using its class name.
// 3. Assign a variable to the element object from the page.
// 4. Update the content of the element to say hello world.
// 5. Using the style properties of the element, update the height and width, then add a default background color to it.
// 6. Create a function to handle two arguments, the first being a color value as a string and the second being the event object of the trigger.
// 7. In the function, output the color value to the console, and for the event, output the event type to the console.
// 8. Add event listeners to the element: mousedown, mouseover, mouseout, and mouseup. For each of these events, send two arguments to the function that you created: a color value and the event object.
// 9. Run the code and try it in your browser.

let div = document.querySelector(".div");
div.style.height = "200px";
div.style.width = "200px";
div.style.backgroundColor = "black";
div.style.color = "white";

div.addEventListener('mouseover', function (e) {
    e.target.innerText = "Click here!";
    console.log(e);
});

div.addEventListener('mouseout', function (e) {
    e.target.innerText = "hello world";
    console.log(e);
});

div.addEventListener('mousedown', function (e) {
    change(this, "green");
    console.log(e, "green");
})

div.addEventListener('mouseup', function (e) {
    change(this, "blue");
    console.log(e, "blue");
})

div.addEventListener('dblclick', function (e) {
    change(this, "orangered");
    console.log(e, "orangered");
})

function change(a, b) {
    a.style.backgroundColor = b;
}