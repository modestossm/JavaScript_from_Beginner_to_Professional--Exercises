// 2. Countdown clock

// This exercise will produce a real-time countdown clock that will display the amount of time in days, hours, minutes, and seconds left until the date value within the input date field. Adjusting the input date field will update the countdown clock. It will also use local storage to capture and save the value in the input field, so if the page is refreshed, the input field will still retain the date value and the countdown clock can continue to count down to that date value from the input field.

// 1. Select the page elements as JavaScript objects, as well as selecting the main clock output area as the value of a JavaScript object.
// 2. Create variables for the timeInterval and a global Boolean value that can be used to stop the clock timer.
// 3. Check the local storage if there is an item for countdown already set. If there is, use that value.
// 4. Create a condition and function to start the clock as the saved value and set the input field date value to the local storage saved value.
// 5. Add an event listener to invoke a function if the value of the input field is changed. Clear the interval if it has changed and set the new endDate value in the local storage.
// 6. Start the clock with the start clock function from that new endDate input value.
// 7. Create a function to start the clock that is used to start the counter. Within that function, you can create a function that updates the counter and outputs the new clock time values into the page clock container area.
// 8. Within this function, check if timeLeft is less than the counter time. Create a separate function to handle this. If it's less, stop the timer.
// 9. If the time left is more and has a value within the object, then output the object by property names and match the property names you use in the time left function object to the class names you use in your webpage elements so they match and you can save time rewriting them. Loop through all the object values and assign the values within the innerHTML page element.
// 10. In the time left function, get the current date. Using Date.parse(), parse the date and calculate the total milliseconds left until the counter ends. Return the values of the total days, hours, minutes, and seconds as a response object to use in the update function.
// 11. If the counter is false and has passed the end time, then clear the interval. If the counter is still valid, set the interval to run the update function every 1,000 milliseconds.

const endDate = document.querySelector("input[name='endDate']");
const clock = document.querySelector(".clock");
let timeInterval;
let timeStop = true;

const savedValue = localStorage.getItem("countdown") || false;

if (savedValue) {
    startClock(savedValue);
    let inputValue = new Date(savedValue);
    endDate.valueAsDate = inputValue;
}

endDate.addEventListener("change", function (e) {
    e.preventDefault();
    clearInterval(timeInterval);
    const temp = new Date(endDate.value);
    localStorage.setItem("countdown", temp);
    startClock(temp);
    timeStop = true;
});

function startClock(d) {
    function updateCounter() {
        let tl = (timeLeft(d));

        if (tl.total <= 0) {
            timeStop = false;
        }
        for (let pro in tl) {
            let el = clock.querySelector("." + pro);
            if (el) {
                el.innerHTML = tl[pro];
            }
        }
    }
        updateCounter();

        if (timeStop) {
            timeInterval = setInterval(updateCounter, 1000);
        } else {
            clearInterval(timeInterval);
    }
}

function timeLeft(d) {
    let currentDate = new Date();
    let t = Date.parse(d) - Date.parse(currentDate);
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
        "total": t,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    };
}