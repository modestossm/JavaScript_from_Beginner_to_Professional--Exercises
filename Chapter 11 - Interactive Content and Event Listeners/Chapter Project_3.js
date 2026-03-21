// 3. Mouse position tracker

//Track your mouse's x and y position within an element. As you move the mouse within the element, the x position and y position values will update.

// 1. Create a page element and add sizing to it, including height and width. Create a class style named active that has a background-color property of red. Finally, create an output element that will contain your text.
// 2. Select the main container element and add event listeners to it. Listen for mouseover, mouseout, and mousemove.
// 3. On mouseover, add the active class, and on mouseout, remove the active class.
// 4. On mousemove, call a function that tracks the event element clientX and clientY positions, embeds them in a human-readable sentence, and outputs it into the output element.

const element = document.querySelector(".holder");

element.addEventListener("mouseover", (e) => { e.target.classList.add("active"); });

element.addEventListener("mouseout", (e) => { e.target.classList.remove("active"); });

element.addEventListener("mousemove", coordin);

function coordin(event) {
    let html = "X:" + event.clientX + " | Y:" + event.clientY;
    document.getElementById("output").innerHTML = html;
}