// This will be about creating a form validator. In this exercise, you will be checking to ensure that the desired values are entered into the input fields.
// The code will check the input values that are entered by the user to match predetermined conditions for those field values.

// 1. Set up a form, adding three input fields inside: First, Last, and Age. Add a submit button.
// 2. Within the JavaScript code, select the form as an element object.
// 3. Add an submit event listener to the form.
// 4. Set up the default value for error as false.
// 5. Create a function named checker(), which will check to see the length of a string and output the string length to the console.
// 6. Add conditions to each of the field values, first checking if the value is there and then returning an error if the response is false, before changing the error variable to true.
// 7. Use console.log() to log the details about the error.
// 8. For the age input value, check the value to see if the age provided is 19 or over, otherwise cause an error.
// 9. At the end of the validation, check if error is true; if it is, use preventDefault() to stop the form submission. Log the errors to the console.

const form = document.querySelector("form");
const email = document.querySelector("#email");

form.addEventListener("submit", (e) => {
    let error = false;

    if (checker(form.first.value)) {
        console.log("First Name needed");
        error = true;
    }

    if (checker(form.last.value)) {
        console.log("Last Name needed");
        error = true;
    }

    if (form.age.value < 19) {
        console.log("You must be 19 or over");
        error = true;
    }

    if (error) {
        e.preventDefault();
        console.log("please review the form");
    }
});

function checker(val) {
    console.log(val.length);

    if (val.length < 6) {
        return true;
    }
    return false;
}