// 1. Build your own analytics

// Figure out which elements are clicked on in a page and record their IDs, tags, and class name.

// 1. Create a main container element within your HTML.
// 2. Add four elements inside the main element, each having a class of box and a unique ID with unique text content.
// 3. Set up your JavaScript code to contain an array that you can use for tracking, adding details from each click into it.
// 4. Select the main container element as a variable object in your code.
// 5. Add an event listener to capture clicks on the element.
// 6. Create a function to handle the clicks. Get the target element from the event object.
// 7. Check if the element has an ID, so that you don't track clicks on the main container.
// 8. Set up an object to track the values; include the element textContent, id, tagName, and className.
// 9. Add the temporary object to your tracking array.
// 10. Output the values captured in your tracking array to your console.

const counter = [];
const main = document.querySelector(".container");

main.addEventListener("click",tracker);

function tracker(e){
    const element = e.target;

    if(element.id){
        const temp = {};
        temp.content = element.textContent;
        temp.id = element.id;
        temp.tagName = element.tagName;
        temp.class = element.className;
        console.dir(element);
        counter.push(temp);
        console.log(counter);
    }
}