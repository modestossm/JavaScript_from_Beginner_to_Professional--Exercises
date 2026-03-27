// 1. Create a Matrix effect

// This exercise will create a continuous animation of text moving from top to bottom.
// The final effect produced will show characters moving down the screen within the canvas element and appearing to disappear and fade as they approach the bottom of the screen as more new characters will be added to the canvas in their place.
// The random character can be either a 0 or 1, and will be in place in the position according to the number, which will represent the vertical position of where the character is drawn.

// The canvas will be filled with a black background, which is going to use opacity to create the fading effect once it's redrawn.

// 1. Create a simple HTML document, and in JavaScript create a canvas element and add the getContent element as 2d.
// 2. Select that canvas element and set the attribute height and width to 500x400. Prepend it to the body of your document.
// 3. Create an empty array named colVal and create a loop to add a number of items into the array that will have a value of 0. The number of items you need to add to the array can be determined by dividing the width by ten, which should be the width between each column. The values in the array will be the starting vertical position of the content for the fillText() method that you will set up.
// 4. Create the main Matrix function to run at 50 millisecond intervals.
// 5. Set the fillStyle to be black with .05 opacity, so that when it layers on top of the existing elements it will produce a fading effect.
// 6. Set the canvas font color to be green.
// 7. Using an array map, iterate all the current items in the colVal array, which holds the vertical position for the output text.
// 8. Within the map, set the characters to display. We want it to alternate between 0 and 1 so, using Math.random(), generate a value of either 0 or 1 for the text output. You can use a ternary operator to do this.
// 9. Set the position of x using the index value multiplied by 10, which is the start of each new letter. Using the index from the colVal array, this will create separate columns of moving characters.
// 10. Create the character within the canvas using the ctx fillText() method, setting the output character to the random 0 or 1 value, using posX for the column x position, and posY, which is the value in the colVal array for the item, as the position of the y axis for the output.
// 11. Add a condition that checks if the position of y is greater than 100 plus a random value of 0-300. The larger the number, the longer the number will fall on the y position. This is random so not all numbers end at the same spot. This will create a staggered effect after the initial drop.
// 12. If the position of y is not past the random value and 100, increment the value of the index item by 10. Assign this value of y back to the item in the colVal array, which can then be used in the next iteration. This will move the letter down 10 pixels on the canvas within the next draw round.

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.setAttribute("width", "500");
canvas.setAttribute("height", "300");
document.body.prepend(canvas);

const colVal = [];

for(let x=0;x<50;x++){
    colVal.push(0);
}

function matrix() {
    ctx.fillStyle = "rgba(0,0,0,.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "green";

    colVal.map((posY, index) => {
        let output = Math.random()<0.5?0:1;
        let posX = (index * 10) + 10;
        ctx.fillText(output, posX, posY);

        if (posY > 100 + Math.random() * 300) {
            colVal[index] = 0;
        } else {
            colVal[index] = posY + 10;
        }
    });
}

setInterval(matrix, 50);