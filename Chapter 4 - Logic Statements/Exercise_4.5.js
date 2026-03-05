// 1. Create a variable called prize and use a prompt to ask the user to set the value by selecting a number between 0 and 10
// 2. Convert the prompt response to a number data type
// 3. Create a variable to use for the output message containing the value "My Selection: "
// 4. Using the switch statement (and creativity), provide a response back regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes
// 6. Output the message back to the user by concatenating your prize variable strings and the output message string

let prize = prompt("Please, select a number between 0 and 10");

prize = parseInt(prize);

const msg = "My Selection: ";

switch(prize) {
    case 0:
    case 1:
    case 2:
        console.log("Your result is too bad");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Your result is bad");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Your result is somewhat bad");
        break;
    case 9:
        console.log("You did nothing beyond the minimum");
        break;
    case 10:
        console.log("Congratulations, very good grade");
        break;
}