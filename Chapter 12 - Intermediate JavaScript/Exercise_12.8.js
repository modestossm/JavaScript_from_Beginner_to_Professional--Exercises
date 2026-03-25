// This exercise will demonstrate how you can create a valid JSON object that can be used as a JavaScript object. 
// You will create a simple list of names and statuses that can be looped through and output the results to the console. 

// 1. Create a JavaScript object that contains JSON formatted data. The object should contain at least two items and each item should be an object with at least two paired values.
// 2. Create a function that can be invoked that will loop through each item in the JavaScript JSON object and output the result to the console. Output each item of data to the console using console.log.
// 3. Invoke the function and launch the JavaScript code

let myList = [
    {
        "name": "Learn JavaScript",
        "status": true
    },
    {
        "name": "Try JSON",
        "status": false
    }
];
reloader();

function reloader() {
    myList.forEach((el) => {
        console.log(`${el.name} = ${el.status}`);
    });
}