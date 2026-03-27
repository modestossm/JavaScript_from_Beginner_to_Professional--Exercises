// 2. List-making project

// Create a list that saves to local storage so even if the page is refreshed, the data will persist within the browser. 
// If the local storage is empty on the first load of the page, set up a JSON file that will be loaded to the local storage and saved as a default list to start the list.

// 1. Set up an HTML file, adding a div to output the list results to, and an input field with a button that can be clicked.
// 2. Using JavaScript, add the page elements as objects that can be used within the code.
// 3. Create your default JSON file (which can be empty) and add the path to the file into your JavaScript code using a variable called url.
// 4. Add an event listener to the button element that will run a function called addToList().
// 5. In addToList(), check if the value of the input field has a length of 3 or more. If it does then create an object with a name and the value of the input field. Create a global variable named myList to hold the list, and within addToList() push the new object data into myList.
// 6. Create a function called maker(), which will create the page element and add text into the element, appending it to the output element. Invoke maker() to add the new item within the addToList() function.
// 7. Also, save the item to local storage so that the visual content of myList will be synced with the local storage saved value. To do this, create a function called savetoStorage() and invoke it every time you update the myList in the script.
// 8. Within the savetoStorage() function, set the value of myList into localStorage using setItem. You will need to convert myList into a string value to save it into localStorage.
// 9. Add to the code getItem() to retrieve a value of myList from localStorage. Set up a global variable for the myList array.
// 10. Add an event listener to listen for DOMContentLoaded. Within that function, check if the localstorage loaded a value. If it did then get myList from local storage and convert it from a string to a JavaScript object. Clear the output element contents. Loop through the items in myList and add them to the page with the maker() function created earlier.
// 11. If localStorage does not have content, load the JSON file with the default values using fetch. Once the data is loaded, assign it to the global myList value. Loop through the items in myList and using maker(), output them to the page. Don't forget to invoke savetoStorage() after so that the storage will contain the same list items as are visible on the page.

const output = document.querySelector(".output");
const myValue = document.querySelector("input"); 
const url = "list.json";

btn1.addEventListener("click", addToList);

let localData = localStorage.getItem("myList");
let myList = [];

window.addEventListener("DOMContentLoaded", () => {
    output.textContent = "Loading......";
    if (localData) {
        myList = JSON.parse(localStorage.getItem("myList"));
        output.innerHTML = "";

        myList.forEach((el, index) => {
            maker(el);
        });
    } else {
        reloader();
    }
});

function addToList() {
if (myValue.value.length > 3) {
        const myObj = {
            "name": myValue.value
        }
        myList.push(myObj);
        maker(myObj);
        savetoStorage();
    }
    myValue.value = "";
}

function savetoStorage() {
    console.log(myList);
    localStorage.setItem("myList", JSON.stringify(myList));
}

function reloader() {
    fetch(url).then(rep => rep.json())
        .then((data) => {
            myList = data;
            myList.forEach((el, index) => {
                maker(el);
            });
            savetoStorage();
        });
}

function maker(el) {
    const div = document.createElement("div");
    div.innerHTML = `${el.name}`;
    output.append(div);
}