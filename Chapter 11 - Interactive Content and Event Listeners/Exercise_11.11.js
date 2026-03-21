// Here we will click the purple square and watch it move on the page.
// This exercise will demonstrate creating the events for a simple interactive element on the page.
// The purple square will move every time it's clicked; once it reaches the boundaries of the page, it will change direction from left to right and right to left, depending on what side it hits.

// 1. Set up styling for an element, setting height and width before setting position to absolute.
// 2. Create an element that you want to move on the page. Interactive Content and Event Listeners[ 294 ]
// 3. Select and store the element using JavaScript.
// 4. Set up an object with values for speed, direction, and position.
// 5. Add an event listener for if the element is clicked on.
// 6. Set a default value of 30 for the value of the interval counter.
// 7. If the counter is less than 1, then end the interval and clear it.
// 8. Once the interval has run 30 times using the value of x, the element will stand still and wait to be clicked again.
// 9. While in motion, check if the position value is greater than 800 or less than 0, which means it needs to change direction. The direction value will provide the direction of movement. If the movement takes the box outside the boundaries of the container, we need to send it in the other direction. This can be done by multiplying by negative one. If the value is positive, it will become negative, sending the element to the left. If the value is negative, it will become positive, sending the element to the right.
// 10. Update the style.left position value of the element, assigning the value of the position that was updated. Add px, as the assigned value of the style is a string.
// 11. Output the result to the console.

const main = document.querySelector("#block");
let mover = { speed: 10, dir: 1, pos: 0 };

main.addEventListener("click", moveBlock);

function moveBlock() {
    let x = 30;

    setInterval(function () {
        if (x < 1) {
            clearInterval();
        } else {
        if (mover.pos > 800 || mover.pos < 0) {
            mover.dir *= -1;
        }
        x--;
        mover.pos += x * mover.dir;
        main.style.left = mover.pos + "px";
        console.log(mover.pos);
        }
    }, 2);
}