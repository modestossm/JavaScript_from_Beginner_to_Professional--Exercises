// Create several divs with color names in textContent. Add JavaScript to add click event listeners to each element, and as each element is clicked, update the background color of the body to match the color name in the div.

const divs = document.querySelectorAll("div");

divs.forEach((e)=>{
    e.addEventListener("click", () => {
        document.body.style.backgroundColor = e.textContent;
    });
});