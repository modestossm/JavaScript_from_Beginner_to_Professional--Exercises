// 2. Form validator

// 1. Using JavaScript, select all the page elements and set them as JavaScript objects so they are easier to select within the code. Also select all the page elements that have the error class as an object.
// 2. Add an event listener to submit and capture the click, preventing the default form action.
// 3. Loop through all the page elements that have a class error and add the hide class, which will remove them from view since this is a new submission.
// 4. Using the regular expression for valid emails, test the results against the input value of the email field.
// 5. Create a function to respond to errors, which removes the hide class from the element next to the element that triggered the event. Apply focus to that element within the function.
// 6. If there is an error that an input does not match the desired regex, pass the parameters to the error handling function you just created.
// 7. Check the password field input value to ensure only letters and numbers are used. Also check the length to ensure that it is 3-8 characters. If either are false, then add the error with the error function and create a message for the user. Set the error Boolean to true.
// 8. Add in an object to track the form data creation and add values to the object by looping through all the inputs, setting the property name to be the same as the input name, and the value the same as the input value.
// 9. Before the end of the validation function, check if an error is still present, and if it is not, submit the form object.

const myForm = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const errors = document.querySelectorAll(".error");

const required = ["email", "userName"];

myForm.addEventListener("submit", validation);

function validation(e) {
    let data = {};
    e.preventDefault();

    errors.forEach(function (item) {
        item.classList.add("hide");
    });

    let error = false;

    inputs.forEach(function (el) {
        let tempName = el.getAttribute("name");

        if (tempName != null) {
            el.style.borderColor = "#ddd";

            if (el.value.length == 0 && required.includes(tempName)) {
                addError(el, "Required Field", tempName);
                error = true;
            }
            if (tempName == "email") {
                let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)/;
                let result = exp.test(el.value);
            if (!result) {
                addError(el, "Invalid Email", tempName);
                error = true;
                }
            }
            if (tempName == "password") {
                let exp = /[A-Za-z0-9]+$/;
                let result = exp.test(el.value);

                if (!result) {
                    addError(el, "Only numbers and Letters",
                    tempName);
                    error = true;
                }
                if (!(el.value.length > 3 && el.value.length < 9)) {
                    addError(el, "Needs to be between 3-8 " + "characters", tempName);
                    error = true;
                }
            }

            data[tempName] = el.value;
        }
    });

    if (!error) {
        myForm.submit();
    }
}

function addError(el, mes, fieldName) {
    let temp = el.nextElementSibling;
    temp.classList.remove("hide");
    temp.textContent = fieldName.toUpperCase() + " " + mes;
    el.style.borderColor = "red";
    el.focus();
}