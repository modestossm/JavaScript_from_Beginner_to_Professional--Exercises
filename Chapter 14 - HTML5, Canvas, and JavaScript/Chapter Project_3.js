// 3. Online paint app

// Create a drawing application where the user can draw using their mouse in the canvas element. 
// When the user is within the canvas element and clicks down on the mouse button, holding the button down will add lines, producing a drawing effect within the canvas element. 
// The color and width of the drawing pencil can be changed dynamically for more functionality. In addition, this app will include a button to save and download the image from the canvas element, as well as clearing the current canvas content.

// 1. Using JavaScript, select all the page elements as JavaScript objects and set up the canvas element to draw into.
// 2. Set a variable to track the location of the pen.
// 3. On the canvas, add an event listener to track mouse movement. Update the pen position to the lastX and lastY positions, and then set the location position to clientX and clientY. Create a function to draw at the pen position and invoke the draw function.
// Chapter 14[ 401 ]
// 4. For mousedown, set draw to true, and for mouseup and mouseout, set draw to false.
// 5. Within the draw function, begin the move path at the pen location values and set the stroke style to the pen color and stroke width to the pen width. These can be changed by clicking the inputs and updating their HTML values. Add the stroke and close the drawing path.
// 6. Add an event listener to the clear button. If clicked, create a function that confirms that the user wants to remove and clear the drawing, and then if true, invoke clearRect() to clear the canvas contents.
// 7. Add another event listener to save the image. When clicked, it should invoke a function that gets the canvas object using toDataURL as base64 image data. You can log it into the console to see what it looks like.
// 8. Create an img element and prepend it to the output area element. Set the src path to the dataURL value.
// 9. To set a download of the image, create an anchor tag, append it to anywhere within the HTML page elements, and create a filename. You can generate a unique filename with Math.random(). Set the hyperlink to the download attribute and the href path to the dataURL path, and trigger a click with the click() method. Once clicked, remove the link element.

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const penColor = document.querySelector("#penColor");
const penWidth = document.querySelector("#penWidth");
const btnSave = document.querySelector(".save");
const btnClear = document.querySelector(".clear");
const output = document.querySelector(".output");

const mLoc = {
    draw: false,
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0
};

canvas.style.border = "1px solid black";
btnSave.addEventListener("click", saveImg);
btnClear.addEventListener("click", clearCanvas);

canvas.addEventListener("mousemove", (e) => {
    mLoc.lastX = mLoc.x;
    mLoc.lastY = mLoc.y;
    //console.log(e);
    mLoc.x = e.clientX;
    mLoc.y = e.clientY;
    draw();
});

canvas.addEventListener("mousedown", (e) => {
    mLoc.draw = true;
});
canvas.addEventListener("mouseup", (e) => {
    mLoc.draw = false;
});
canvas.addEventListener("mouseout", (e) => {
    mLoc.draw = false;
});

function saveImg() {
    const dataURL = canvas.toDataURL();
    console.log(dataURL);
    const img = document.createElement("img");
    output.prepend(img);
    img.setAttribute("src", dataURL);
    const link = document.createElement("a");
    output.append(link);
    let fileName = Math.random().toString(16).substr(-8) + ".png";
    link.setAttribute("download", fileName);
    link.href = dataURL;
    link.click();
    output.removeChild(link);
}

function clearCanvas() {
    let temp = confirm("clear canvas?");

    if (temp) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function draw() {
    if (mLoc.draw) {
        ctx.beginPath();
        ctx.moveTo(mLoc.lastX, mLoc.lastY);
        ctx.lineTo(mLoc.x, mLoc.y);
        ctx.strokeStyle = penColor.value;
        ctx.lineWidth = penWidth.value;
        ctx.stroke();
        ctx.closePath();
    }
}