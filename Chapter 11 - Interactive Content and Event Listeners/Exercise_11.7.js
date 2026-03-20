// 1. Within the JavaScript code, put the HTML output element into a variable object that you can use to display content on the page.
// 2. Select both input fields. You can use querySelector() and "input[name='first']", which will allow you to make your selection using the input field name.
// 3. Add an event listener to the first input and the second input. The event listener should be a change event to track changed values. This will only be invoked if the value in the field is changed and you click off the input field.
// 4. Create a separate function to handle the output of the content to the page, updating the textContent of the output element.
// 5. Send the values of the input fields as they get changed to the output element textContent.
// 6. Add four additional event listeners and listen for blur and focus on each input. Once the event gets triggered, output in the console the value of the event type.

const output = document.querySelector(".output1");
const input1 = document.querySelector("input[name='first']");
const input2 = document.querySelector("input[name='last']");


input1.addEventListener("change", (e) => {
    console.log("change");
    updater(input1.value);
});
input1.addEventListener("blur", (e) => {
    console.log("blur");
});
input1.addEventListener("focus", (e) => {
    console.log("focus");
});

input2.addEventListener("change", (e) => {
    console.log("change");
    updater(input2.value);
});
input2.addEventListener("blur", (e) => {
    console.log("blur");
});
input2.addEventListener("focus", (e) => {
    console.log("focus");
});

function updater(str) {
    output.textContent = str;
}