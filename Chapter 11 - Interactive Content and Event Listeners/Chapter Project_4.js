// 4. Box clicker speed test game

// The objective here is to click on the red box as quickly as possible once it appears.
// The box will be randomly placed within a container and positioned with random values. 
// The box will have an event listener that will track the start and click times to calculate the duration of the click events. 
// You can use the following template, as the HTML gets a little complex here—just add the <script> element to make the HTML interactive!

// 1. Select all the stars within the ul that have a class of stars into an object, and create another object for the output element.
// 2. Create another object to contain the results of calling querySelectorAll() on elements with a class of star.
// 3. Loop through the resulting node list, adding to the element object the value of the index plus 1, and adding an event listener listening for a click. Attach a function called starRate() to the click event of each star element.
// 4. Within the starRate() function, add to the output the value of the star using the event target and the element object's star value, which was set in the previous step.
// 5. Loop through all the stars using forEach() to check if the index value of the star element is less than the star value; if it is, apply a class of orange. Otherwise, remove the class of orange from the classList element.

const output = document.querySelector('.output');
const message = document.querySelector('.message');

message.textContent = "Press to Start";

const box = document.createElement('div');

const game = {
    timer: 0,
    start: null
};

box.classList.add('box');
output.append(box);

box.addEventListener('click', (e) => {
    box.textContent = "";
    box.style.display = 'none';
    game.timer = setTimeout(addBox, ranNum(3000));

    if (!game.start) {
        message.textContent = 'Loading....';
    } else {
        const cur = new Date().getTime();
        const dur = (cur - game.start) / 1000;
        message.textContent = `It took ${dur} seconds to click`;
    }
});

function addBox() {
    message.textContent = 'Click it...';
    game.start = new Date().getTime();
    box.style.display = 'block';
    box.style.left = ranNum(450) + 'px';
    box.style.top = ranNum(450) + 'px';
}

function ranNum(max) {
    return Math.floor(Math.random() * max);
}