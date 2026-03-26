// We will create an online drawing board, and include a dynamic value for width, color, and ability to erase the current drawing. 

// 1. Select the page elements as variable objects in JavaScript. Get the input field and select the button as an object.
// 2. Add an event listener to the button that will run a function to clear the current canvas. Within the clear function, use the confirm() method to check if the user wants to erase the canvas drawing. If they then confirm using clearRect(), delete the contents of the canvas element.
// 3. Set a global position object for x and y and by adding event listeners to the mouse events, update the position. If the mouse move is triggered, invoke a draw function. Set the position to update the mouse position, setting the global position values to that of the mouse x and y.
// 4. Within the draw function, check if the mouse button is pressed, and if not, then add return. If it is pressed, we can then draw on the canvas. Set the new path and move to the positions x and y. Start a new line, get the strokestyle value from the color input field, and set the linewidth value from the input width value. Add the stroke() method to add the new line to the page.

window.onload = init;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.style.border = "1px solid black";

const penColor = document.querySelector("#penColor");
const penWidth = document.querySelector("#penWidth");
document.querySelector(".clear").addEventListener("click", clearImg);

canvas.width = 700;
canvas.height = 700;

let pos = {
    x: 0,
    y: 0,
};

function init() {
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mousemove", setPosition);
    canvas.addEventListener("mouseenter", setPosition);
}

function draw(e) {
    if (e.buttons !== 1) return;
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    setPosition(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = penColor.value;
    ctx.lineWidth = penWidth.value;
    ctx.lineCap = "round";
    ctx.stroke();
}

function setPosition(e) {
    pos.x = e.pageX;
    pos.y = e.pageY;
}

function clearImg() {
    const temp = confirm("Clear confirm?");
    if (temp) {
    ctx.clearRect(0, 0, canvas.offsetWidth,
    canvas.offsetHeight);
    }
}