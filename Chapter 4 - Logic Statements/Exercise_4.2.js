// 1. Create a prompt to ask the user's age
// 2. Convert the response from the prompt to a number
// 3. Declare a message variable that you will use to hold the console message for the user
// 4. If the input age is equal to or greater than 21, set the message variable to confirm entry to a venue and the ability to purchase alcohol
// 5. If the input age is equal to or greater than 19, set the message variable to nconfirm entry to the venue but deny the purchase of alcohol
// 6. Provide a default else statement to set the message variable to deny entry if none are true
// 7. Output the response message variable to the console

let user = prompt("What's your age?");

let userAge = parseInt(user);

let msg1 = "You can entry and to purchase alcohol";
let msg2 = "You can entry but not to purchase alcohol";
let msg3 = "You are not allowed to enter!";

if(userAge >= 21) {
    console.log(msg1);
} else if (userAge >= 19) {
    console.log(msg2);
} else {
    console.log(msg3);
}