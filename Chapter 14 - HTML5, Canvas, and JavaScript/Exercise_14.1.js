// This exercise will demonstrate the process of uploading and displaying local image files in your webpage.

// 1. Select your page elements as values within variable objects in your JavaScript code.
// 2. Add an event listener to the input field. The event trigger should be changed so that it immediately invokes a reader function.
// 3. Create a function to handle the reading of the selected files.
// 4. Using the event object, select the target element that triggered the event. Get the files selected within that input and assign them to the files variable.
// 5. Loop through all the files that were selected.
// 6. Set the files by index within the loop to a variable named file.
// 7. Set the image file as the file within the loop selected from the user input field files.
// 8. Add the newly created img tag to the page, create an area on the page that you can output the content to, and append the new page element to it.
// 9. Create a new FileReader object.
// 10. Add an onload event listener to the fileReader object to create and invoke an anonymous function that sets the source of the image as the result from the target element. Pass in the image object you just created as an argument into the function.
// 11. Using readAsDataURL(), get the current file object and pass it into the file reader object so that it can be used once the onload completes and is added to the page.
// 12. You can now select multiple image files from your computer and have them show on your webpage.

let input = document.querySelector("input[type='file']");
let output = document.querySelector(".output");

input.addEventListener('change', readingFiles);

function readingFiles(e) {
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const img = document.createElement("img");
        img.classList.add("thumb");
        output.appendChild(img);

        const fileReader = new FileReader();
        fileReader.onload = function (event) {
            img.src = event.target.result;
        };

        fileReader.readAsDataURL(file);
    }
}