// 1. Evaluating a number game

//Ask the user to enter a number and check whether it's greater than, equal to, or less than a dynamic number value in your code. Output the result to the user.

let msg = prompt("Choose a number between 0 and 99");

msg = parseInt(msg);

let randomNumber = Math.floor(Math.random()*100);

if(msg > randomNumber) {
    console.log("Your chosen number (" + msg + ") is higher than the random number (" + randomNumber + ")");
} else if(msg < randomNumber) {
    console.log("Your chosen number (" + msg + ") is lower than the random number (" + randomNumber + ")");
} else {
    console.log("Your chosen number (" + msg + ") is equal to the random number (" + randomNumber + ")");
}


// 2. Friend checker game

// Ask the user to enter a name, using the switch statement to return a confirmation that the user is a friend if the name selected is known in the case statements.
// You can add a default response that you don't know the person if it's an unknown name.
// Output the result into the console.

let name = prompt("What's your name?");

let text = "You are ";

switch(name) {
    case "name of a friend":
        text += "a Friend";
        break;
    default:
        text += "not a Friend"
        break;
}

console.log(text);


// 3. Rock Paper Scissors game

// 1. Create an array that contains the variables Rock, Paper, and Scissors.
// 2. Set up a variable that generates a random number 0-2 for the player and then do the same for the computer's selection. The number represents the index values in the array of the 3 items.
// 3. Create a variable to hold a response message to the user. This can show the random results for the player and then also the result for the computer of the matching item from the array.
// 4. Create a condition to handle the player and computer selections. If both are the same, this results in a tie.
// 5. Use conditions to apply the game logic and return the correct results. There are several ways to do this with the condition statements, but you could check which player's index value is bigger and assign the victory accordingly, with the exception of Rock beating Scissors.
// 6. Add a new output message that shows the player selection versus the computer selection and the result of the game.

const game = ["Rock", "Paper", "Scissors"];

let numberPlayer = Math.floor(Math.random()*3);
let numberComputer = Math.floor(Math.random()*3);

let result = "You chose " + game[numberPlayer] + " and the computer chose " + game[numberComputer] +". ";

if(numberPlayer === numberComputer) {
    result += "The result is a tie."
} else if(numberPlayer > numberComputer && (numberPlayer - numberComputer) < 2) {
    result += "You won!"
} else {
    result += "You lost!"
}

console.log(result);