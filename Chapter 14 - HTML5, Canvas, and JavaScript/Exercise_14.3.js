// In this exercise, you will be drawing a stick person using canvas.

// 1. Create the page elements and prepare to draw on the canvas.
// 2. Begin the path with an arc roughly at the top center of your canvas object.
// 3. Using arc(), set a position for the left eye, roughly at the top left of the center of the arc you just drew, then add another arc for the right eye. Create a half arc for the mouth (the radian angle for a semicircle is pi) and fill all.
// 4. Move the draw position to the center and draw a line for the nose.
// 5. Draw the body with a line down from the center of the arc, create the left arm, and then move the draw position to do the right arm, which will be twice the width of the left arm. Move back to the center and continue down to draw the left leg, move back to the center, and draw the line for the right leg.
// 6. Move to the top, set the colour to blue, and draw a triangle for a hat.

const canvas = document.querySelector("#canva");
const ctx = canvas.getContext("2d");

canvas.width = 600; //px
canvas.height = 600; //px

ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(300, 130, 100, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(250, 120, 20, 0, Math.PI * 2);
ctx.moveTo(370, 120);
ctx.arc(350, 120, 20, 0, Math.PI * 2);
ctx.moveTo(240, 160);
ctx.arc(300, 160, 60, 0, Math.PI);
ctx.fill();
ctx.moveTo(300, 130);
ctx.lineTo(300, 150);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(300, 230);
ctx.lineTo(300, 270);
ctx.lineTo(400, 270);
ctx.lineTo(200, 270);
ctx.lineTo(300, 270);
ctx.lineTo(300, 350);
ctx.lineTo(400, 500);
ctx.moveTo(300, 350);
ctx.lineTo(200, 500);
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.moveTo(200, 50);
ctx.lineTo(400, 50);
ctx.lineTo(300, 20);
ctx.lineTo(200, 50);
ctx.fill();
ctx.stroke();