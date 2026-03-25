// Let's create a local storage shopping list that will store values in the browser's local storage. 
// This is an example of using JavaScript to convert from strings to useable JavaScript objects and back to strings that can be stored in local storage.

// 1. In the JavaScript code, select all the page elements as JavaScript objects.
// 2. Create a tasks array with a value of the local tasklist storage if it exists, otherwise set the tasks array to an empty array. Using JSON.parse, you can convert the string value to a useable object in JavaScript.
// 3. Loop through all the items in the tasklist array; they will be stored as objects, with a name and a Boolean value for their checked status. Create a separate function to build the task item, adding it to the page from the list.
// 4. In the task generation function, create a new list item and a textNode. Append textNode to the list item. Append the list item to the page output area. If the task is marked complete with a Boolean value of true, then add the style class of ready.
// 5. Add an event listener to the list item that will toggle the ready class when clicked. Every time there is a change to any list item, you will also need to store that to the local storage. Create a task builder function that will store and ensure the visual list is the same as the local storage list. You will need to clear the current task list array and rebuild from the visual data, so create a function to handle the list building.
// 6. The task builder function will clear the current tasks array, and select all the li elements on the page. Loop through all the list items, getting the text value from the element, and checking if it contains the class of ready. If it contains the ready class, then mark the checked condition as true. Add the results to the tasks array, and this will rebuild the array to ensure it matches with what the user sees visually. Send to a save tasks function to save the tasks array in local storage, so if the page is refreshed, you will see the same list.
// 7. In the save tasks function, set the localstorage item to the tasks array. You will need to stringify the object so that it can go into the string parameter of local storage.
// 8. Now, when you refresh the page, you will see the list of tasks. They can be crossed out by clicking them and new items can be added in the input field by pressing the button to submit new items.

const userTask = document.querySelector(".main input");
const addBtn = document.querySelector(".main button");
const output = document.querySelector(".output");
const tasks = JSON.parse(localStorage.getItem("tasklist")) || [];
addBtn.addEventListener("click", createListItem);

if (tasks.length > 0) {
    tasks.forEach((task) => {
        genItem(task.val, task.checked);
    });
}

function saveTasks() {
    localStorage.setItem("tasklist", JSON.stringify(tasks));
}

function buildTasks() {
    tasks.length = 0;
    const curList = output.querySelectorAll("li");

    curList.forEach((el) => {
        const tempTask = {
        val: el.textContent,
        checked: false
        };
        if (el.classList.contains("ready")) {
            tempTask.checked = true;
        }
        tasks.push(tempTask);
    });
    saveTasks();
}

function genItem(val, complete) {
    const li = document.createElement("li");
    const temp = document.createTextNode(val);
    li.appendChild(temp);
    output.append(li);
    userTask.value = "";

    if (complete) {
        li.classList.add("ready");
    }

    li.addEventListener("click", (e) => {
        li.classList.toggle("ready");
        buildTasks();
    });
    return val;
}

function createListItem() {
    const val = userTask.value;

    if (val.length > 0) {
        const myObj = {
            val: genItem(val, false),
            checked: false
        };
        tasks.push(myObj);
        saveTasks();
    }
}