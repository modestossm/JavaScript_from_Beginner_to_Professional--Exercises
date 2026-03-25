// 1. In JavaScript, select both text areas and the button and set them as JavaScript objects.
// 2. Add an event listener to the button that will invoke a function that gets the content of the first textarea and filters it to only accept email addresses.
// 3. Within the extracting function, get the content of the first input field. Using match(), return an array of the email addresses that were matched from within the content from the first textarea.
// 4. To remove any duplicates, create a separate array that will hold only unique values.
// 5. Loop through all the email addresses found and check whether each one is already in the holder array, and if not, add it.
// 6. Using the join() array method, you can now join together the results of the email addresses found within the content and output it into the second textarea.

const area1 = document.querySelector("textarea[name='txtarea1']");
const area2 = document.querySelector("textarea[name='txtarea2']");

document.querySelector("button").addEventListener("click", lookUp);

function lookUp() {
    const txt = area1.value;
    const data = txt.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    const holder = [];

    for (let x = 0; x <data.length; x++) {
        if (holder.indexOf(data[x]) == -1) {
            holder.push(data[x]);
        }
    }
    area2.value = holder.join(',');
}