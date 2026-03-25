// 3. Simple math quiz

// 1. In JavaScript, wrap the code within a function, app. Within the app function, create variable objects to contain all the page elements so they can be used in the script, and create a blank object called game.
// 2. Add a DOMContentLoaded event listener that invokes the app initialization once the page loads.
// 3. Within an init() function, add an event listener to the button, listen for a click, and track the event into a function called checker. Also within the init function, load another function called loadQuestion().
// 4. Create a function to load the questions, and another function that can generate a random number from min and max values in the arguments.
// 5. In the loadQuestion() function, generate two random values and add them to the game object. Calculate the result of both values added together and assign that value within the game object as well.
// 6. Assign and update the textContent of the page elements that require the dynamic number values for the calculation question.
// 7. When the button is clicked, use a ternary operator to determine whether the answer to the question was correct or incorrect. Set the color to green for correct, and to red for incorrect.
// 8. Create a page element to output all the questions and keep track of the results. Within the checker() function, append a new element to the HTML with a style color to indicate a correct or incorrect response. Display the first and second values as well as the answer, and show the user's response within brackets.
// 9. Clear the input field and load the next question.

const app = function () {
    const game = {};
    const val1 = document.querySelector(".val1");
    const val2 = document.querySelector(".val2");
    const output = document.querySelector(".output");
    const answer = document.querySelector("input");

    function init() {
        document.querySelector("button").addEventListener("click", checker);
        loadQuestion();
    }

    function ranValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function loadQuestion() {
        game.val1 = ranValue(1, 100);
        game.val2 = ranValue(1, 100);
        game.answer = game.val1 + game.val2;
        val1.textContent = game.val1;
        val2.textContent = game.val2;
    }

    function checker() {
        let bg = answer.value == game.answer ? "green" : "red";
        output.innerHTML +=`<div style="color:${bg}">${game.val1} + ${game.val2} = ${game.answer} (${answer.value}) </div>`;
        answer.value = "";
        loadQuestion();
    }

    return {
        init: init
    };
}();

document.addEventListener('DOMContentLoaded', app.init);