// 1. Using the above HTML as a template, add the JavaScript code, selecting each page element, including the div, the input field, and the button element. Assign these element objects to variables in your code.
// 2. Create an empty array called log, which will be used to track and log all the events.
// 3. Create a function that will capture the event object details in an object, adding it to the log array. Get the event target and create an object, adding it to the array that stores the input value at the time, the type of event, the class name of the target element, and the tag name of the target element.
// 4. Within the logging function, get the value of the content within the input and assign that value to the textContent of the div.
// 5. Clear the div content after the information is added to the log array.
// 6. Add an event listener to both of the first two buttons that sends the event object to the tracking function created in the earlier steps.
// 7. Attach an event listener to the third button that outputs the log content to the console.

const myInput = document.querySelector("input[name='message']");
const output = document.querySelector(".output");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const log = [];

btn1.addEventListener("click", tracker);
btn2.addEventListener("click", tracker);

btn3.addEventListener("click", (e) => {
    console.log(log);
});

function tracker(e) {
    output.textContent = myInput.value;
    
    const ev = e.target;
    console.dir(ev);

    const temp = {
        message: myInput.value,
        type: ev.type,
        class: ev.className,
        tag: ev.tagName
    };

    log.push(temp);
    myInput.value = "";
}