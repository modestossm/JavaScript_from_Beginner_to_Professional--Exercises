// We will practice animating shapes and moving objects on the page.
// This exercise will demonstrate how to move an object on the page using the HTML5 canvas element and JavaScript.

// 1. Create the canvas and apply a border of 1 px to it.
// 2. Select the canvas page elements with JavaScript and prepare to draw on the canvas.
// 3. Create variables to track the x and y positions, as well as the x-direction speed and the y-direction speed. You can set these as a default of 1 and the x and y starting positions can be half of the canvas dimensions.
// 4. Create a function to draw the ball. This will draw the ball as a red ball arc in the x and y positions. Also, the size for the ball should be set as a variable so that the boundaries can be calculated from it. Fill and close the path.
// 5. Create a function to move the ball and set the interval on that function to 10 milliseconds.
// 6. In the aforementioned movement function, clear the current rectangle and draw the ball using the draw ball function.
// 7. Check the position of the ball. If the ball is outside the canvas boundaries, you need to change direction. This can be done by multiplying the direction by -1. Update the x and y positions with the new values.

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const ballSize = 10;

let x = canvas.width / 2;
let y = canvas.height / 2;
let dirX = 1;
let dirY = 1;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballSize, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function move() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if (x > canvas.width - ballSize || x < ballSize) {
        dirX *= -1;
    }
    if (y > canvas.height - ballSize || y < ballSize) {
        dirY *= -1;
    }
    x += dirX;
    y += dirY;
}

setInterval(move, 10);