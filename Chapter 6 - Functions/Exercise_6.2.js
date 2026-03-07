// 1. Create an array of descriptive words.
// 2. Create a function that contains a prompt asking the user for a name.
// 3. Select a random value from the array using Math.random.
// 4. Output into the console the prompt value and the randomly selected array value.
// 5. Invoke the function.

const arr = ["Hi", "Hello", "Whats'up"];

function name() {
    let n = prompt("What's your name?");

    let randomNum = Math.floor(Math.random() * arr.length);
    let randomWord = arr[randomNum];

    console.log(randomWord + ", " + n + "!");
}

name();



