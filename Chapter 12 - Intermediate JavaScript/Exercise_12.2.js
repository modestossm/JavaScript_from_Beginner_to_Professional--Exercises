// Create an application that uses JavaScript to check whether the string value of an input is a validly formatted email using regex.

// 1. Use the above template code to start creating your application. Within the JavaScript code, select the input, output, and button elements from the page as JavaScript objects.
// 2. Add an event listener to the button to run a block of code when clicked that will get the current value in the input field. Create a blank response value that will populate the output div element contents.
// 3. Add a test with the string value from the input field and the expression for email format. If the test result is false, update the response output to say Invalid Email and change the output color to red.
// 4. If the condition of the test returns true, add a response that confirms the email format is correct and change the text color of output to green.
// 5. Output the response value into the output element.

const output = document.querySelector(".output");
const emailVal = document.querySelector("input");
const btn = document.querySelector("button");

const emailExp =/([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;

btn.addEventListener("click", (e) => {
    const val = emailVal.value;
    const result = emailExp.test(val);
    let response = "";

    if (!result) {
        response = "Invalid Email";
        output.style.color = "red";
    } else {
        response = "Valid Email";
        output.style.color = "green";
    }
    
    emailVal.value = "";
    output.textContent = response;
});