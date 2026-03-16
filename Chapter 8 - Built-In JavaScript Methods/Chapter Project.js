// 1. Word scrambler

// Create a function that returns a value of a word and scrambles the letter order with Math.random():

// 1. Create a string that will hold a word value of your choice.
// 2. Create a function that can intake a parameter of the string word value.
// 3. Just like an array, strings also have a length by default. You can use this length to set the loop maximum value. You will need to create a separate variable to hold this value as the length of the string will be decreasing as the loop continues.
// 4. Create an empty temporary string variable that you can use to hold the new scrambled word value.
// 5. Create a for loop that will iterate the number of letters within the string parameter starting at 0 and iterating until the original length value of the string is reached.
// 6. Create a variable that will randomly select one letter using its index value, with Math.floor() and Math.random() multiplied by the current length of the string.
// 7. Add the new letter to the new string and remove it from the original string.
// 8. Using console.log() output the newly constructed string from the random letters and output to the console both the original string and the new one as the loop continues.
// 9. Update the original string by selecting the substring from the index value and adding it to the remaining string value from the index plus one onward. Output the new original string value with the removed characters.
// 10. As you loop through the content you will see a countdown of the remaining letters, the new scrambled version of the word as it is built, and the decreasing letters in the original word.
// 11. Return the final result and invoke the function with the original string word as an argument. Output this to the console.

let word = "Jesus Salva";

function scrambler(param) {
    let wordLength = param.length;
    let newWord = "";
    
    for(let i = 0; i < wordLength; i++) {
        // console.log(param.length);

        let scram = Math.floor((Math.random() * param.length));
        
        newWord += param[scram];
        // console.log(newWord);

        param = param.substr(0, scram) + param.substr(scram + 1);
        // console.log(param);
    }

    return newWord;
}

console.log(scrambler(word));



// 2. Countdown timer

// Create code for a countdown timer that can be executed in the console window, and will show the total milliseconds, days, hours, minutes, and seconds remaining until a target date is reached:

// 1. Create an end date that you want to count down to. Format it in a date type format within a string.
// 2. Create a countdown function that will parse the endDate() and subtract the current date from that end date. This will show the total in milliseconds. Using Date.parse() you can convert a string representation of a date to a numeric value as a number of milliseconds since January 1, 1970, 00:00:00 UTC.
// 3. Once you have the total milliseconds, to get the days, hours, minutes, and seconds you can take the following steps: 
//      • To get days you can divide the number of milliseconds in a date, removing the remainder with Math.floor(). 
//      • To get hours you can use modulus to capture just the remainder once the total days are removed.
//      • To get minutes you can use the value of milliseconds in a minute and using the modulus capture the remainder. 
//      • Do the same for seconds by dividing the number by seconds in milliseconds and getting the remainder. If you use Math.floor() you can round down removing any remaining decimal places that will be shown in the lower values.
// 4. Return all the values within an object with property names indicating what the unit of time the values refer to.
// 5. Create a function to use a setTimeout() to run the update() function every second (1,000 milliseconds). The update() function will create a variable that can temporarily hold the object return values of countdown(), and create an empty variable that will be used to create the output values.
// 6. Within the same function, using the for loop get all the properties and values of the temp object variable. As you iterate through the object update the output string to contain the property name and property value.
// 7. Using console.log(), print the output result string into the console.

const dataFinal = "March 31 2026";

function countdown() {
    const total = Date.parse(dataFinal) - new Date();
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((total / 1000 / 60) % 60);
    const secs = Math.floor((total / 1000) % 60);

    return {
        days,
        hrs,
        mins,
        secs
    };
}

function update() {
    const temp = countdown();

    let output = "";

    for (const property in temp) {
        output += (`| ${property}: ${temp[property]} | `);
    }
    
    console.log(output);
    setTimeout(update, 1000);
}

update();