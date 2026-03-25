// This exercise will demonstrate the use of JSON methods to parse JSON and convert string values to JSON.
// Using JSON methods with JavaScript, convert a JSON formatted string value to a JavaScript object and convert a JavaScript object into a string representation of the JSON object

// 1. Create a JSON object with several items and objects. You can use the JSON object from the previous lesson.
// 2. Using the JSON stringify() method, convert the JSON JavaScript object into a string version and assign it to a variable named newStr [{"name":"Learn JavaScript","status":true},{"name":"Try JSON","status":false}].
// 3. Using JSON.parse(), convert the newStr value back into an object and assign it to a variable named newObj.
// 4. Iterate through the items in the newObj and output the results to the console.

let myList = [{
        "name": "Learn JavaScript",
        "status": true
    },
    {
        "name": "Try JSON",
        "status": false
    }
];

const newStr = JSON.stringify(myList);
const newObj = JSON.parse(newStr);

newObj.forEach((element)=>{
    console.log(element);
});