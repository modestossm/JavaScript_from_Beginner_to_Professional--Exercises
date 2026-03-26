// We will practice uploading a local image to the canvas.
// The following exercise will demonstrate how to upload images from your local computer and have them displayed within the canvas element within your browser.

// 1. Set up the page elements and add an input field to upload an image. Add the canvas element to the page.
// 2. In JavaScript, select the input field and the canvas elements as JavaScript objects.
// 3. Add an event listener to invoke an upload function once there is a change in the input field contents.
// 4. Create the aforementioned function to handle the upload of the image to the canvas. Using FileReader, create a new FileReader object. In the reader.onload event, create a new image object.
// 5. Add an onload listener to the image object so that when the image is loaded, set the canvas height and width to match half the image size height and width. Using ctx.drawImage(), add the image to the canvas.
// 6. Set the img source to the result from the input value.
// 7. Use the reader object and invoke readAsDataURL() to convert the file input value to a readable format of base64 image data that can be used within the canvas.

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const imgLoader = document.querySelector("#imgLoader");

imgLoader.addEventListener("change", handleUpload);

function handleUpload(e) {
    console.log(e);
    const reader = new FileReader();

    reader.onload = function (e) {
        console.log(e);
        const img = new Image();

        img.onload = function () {
            canvas.width = img.width / 2;
            canvas.height = img.height / 2;
            ctx.drawImage(img, 0, 0, img.width / 2, img.height / 2);
        }
        img.src = e.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}