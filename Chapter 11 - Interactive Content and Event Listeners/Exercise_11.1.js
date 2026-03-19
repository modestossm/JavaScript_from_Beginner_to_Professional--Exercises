// Personalize your web pages. Allow users to change the theme of the page display between regular mode and dark mode. 

// 1. Within a simple HTML document, set up a Boolean value variable to use that will toggle the color modes.
// 2. Use window.onclick to set up a function that outputs a message in the console when clicked. You can use the value of the Boolean variable.
// 3. Within the function, add a condition that checks whether the darkMode variable is true or false.
// 4. If false, then update the page style to a background color of black and a font color of white.
// 5. Add an else response that changes the color of the background to white and the color of the text to black. Also, update the value of the darkMode variable accordingly.

let btn = document.getElementById("btn");
let background = document.getElementById("body");

btn.onclick = function darkMode() {
    btn.classList.toggle("activated");

    if(btn.classList.contains("activated")) {
        console.log("Dark Mode Ativado");

        background.style.backgroundColor = "black";
        background.style.color = "white";
    } else {
        console.log("Dark Mode Desativado");

        background.style.backgroundColor = "white";
        background.style.color = "black";
    }
};

