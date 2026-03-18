// Shopping list: Using the following HTML template, update the code to add new items to the list of items on the page.
// Once the button is clicked, it will add a new item to the list of items.

// 1. Select the page elements as JavaScript objects.
// 2. Add an onclick event listener to the add button. Once the button is clicked, it should add the contents of the input field to the end of the list. You can call the function addOne().
// 3. Within addOne(), create li elements to append to the main list on the page. Add the input value to the list item text content.
// 4. Within the addOne() function, get the current value of the addItem input field. Use that value to create a textNode with that value, adding it to the list item. Append the textNode to the list item.

const item = document.getElementById("addItem");
const btn = document.getElementById("addNew");
const lista = document.getElementById("sList");

function addOne() {
    const li = document.createElement("li");
    li.innerText = item.value;

    lista.appendChild(li);
}

btn.addEventListener('click', addOne);