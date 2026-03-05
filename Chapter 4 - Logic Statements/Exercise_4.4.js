// 1. Start by setting a variable that gets a random value assigned to it. The value is assigned by generating a random number 0-5, for 6 possible results. You can increase this number as you add more results.
// 2. Create a prompt that can get a string value input from a user that you can repeat back in the final output.
// 3. Create 6 responses using the switch statement, each assigned to a different value from the random number generator.
// 4. Create a variable to hold the end response, which should be a sentence printed for the user. You can assign different string values for each case, assigning new values depending on the results from the random value.
// 5. Output the user's original question, plus the randomly selected case response, to the console after the user enters their question.

let randomNumber = Math.random();

randomNumber *= 7;
randomNumber = Math.floor(randomNumber);

let question = prompt("Ask me anything");

switch (randomNumber) {
    case 0:
        answer = "It will work out";
        break;
    case 1:
        answer = "Maybe, maybe not";
        break;
    case 2:
        answer = "Probably not";
        break;
    case 3:
        answer = "Highly likely";
        break;
    case 4:
        answer = "I don't like it";
        break;
    case 5:
        answer = "It's perfect";
        break;
    default:
        answer = "I don't know about that";
}

let output = "You asked me " + question + ". I think that " + answer;

console.log(output);