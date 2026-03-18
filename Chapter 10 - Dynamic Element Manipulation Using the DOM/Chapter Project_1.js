// 1. Collapsible accordion component

// Build a collapsing and expanding accordion component that will open page elements, hiding and showing content when the title tab is clicked.

// 1. Using querySelectorAll(), select all the elements with a class of title.
// 2. Using querySelectorAll(), select all the elements with a class of myText. This should be the same number of elements as the title elements.
// 3. Iterate through all the title elements and add event listeners that, once clicked, will select the next element siblings.
// 4. Select the element on the click action and toggle the classlist of the element with the class of active. This will allow the user to click the element and hide and show the below content.
// 5. Add a function that will be invoked each time the elements are clicked that will remove the class of active from all the elements. This will hide all the elements with myText.

let title = document.querySelectorAll(".title");
let text = document.querySelectorAll(".myText");

title.forEach((e) => {
    e.addEventListener("click", (i) => {
        console.log(e.nextElementSibling);
        remover();
        e.nextElementSibling.classList.toggle("active");
        })
})

function remover() {
    text.forEach((element) => {
        element.classList.remove("active");
    })
}

// 2. Collapsible accordion component