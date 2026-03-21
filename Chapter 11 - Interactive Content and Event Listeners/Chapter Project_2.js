// 2. Star rating system

// Create a star rating component that is fully interactive and dynamic using JavaScript.

// 1. Select all the stars within the ul that have a class of stars into an object, and create another object for the output element.
// 2. Create another object to contain the results of calling querySelectorAll() on elements with a class of star.
// 3. Loop through the resulting node list, adding to the element object the value of the index plus 1, and adding an event listener listening for a click. Attach a function called starRate() to the click event of each star element.
// 4. Within the starRate() function, add to the output the value of the star using the event target and the element object's star value, which was set in the previous step.
// 5. Loop through all the stars using forEach() to check if the index value of the star element is less than the star value; if it is, apply a class of orange. Otherwise, remove the class of orange from the classList element.

const starsUL = document.querySelector(".stars");
const output = document.querySelector(".output");
const stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {
    star.starValue = (index + 1);
    star.addEventListener("click", starRate);
});

function starRate(e) {
    output.innerHTML = `You Rated this ${e.target.starValue} stars`;

    stars.forEach((star, index) => {
        if (index < e.target.starValue) {
            star.classList.add("orange");
        } else {
            star.classList.remove("orange");
        }
    });
}