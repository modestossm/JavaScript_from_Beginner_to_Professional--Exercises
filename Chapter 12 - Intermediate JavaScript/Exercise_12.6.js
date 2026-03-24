// Let's make a cookie builder. Create several functions that will allow you to interact
// with page cookies, including reading a cookie value by name, creating a new cookie
// using a name and setting it for a set number of days, and deleting a cookie.

// 1. Set up your webpage, and in the JavaScript code, output the value of document.cookie. It should be blank.
// 2. Create a function that will take the parameters for cookieName, cookieValue, and the number of days you want to set the cookie.
// 3. Check if days is valid, and within the block of valid code, get the current date. Set a setTime value for the cookie to expire in milliseconds by multiplying the days into milliseconds.
// 4. Change the date object of milliseconds until the cookie expires to a UTC string value.
// 5. Set document.cookie to cookieName = cookieValue, plus add the expiry details and lastly specify path=/.
// 6. Create a function to create a test cookie with a value and expiry set after a number of days. Create a second cookie the same way, and when you refresh your page, you should see at least two cookies in the console.
// 7. Create a second function to read a cookie value, set the value as false, and then create an array of the cookies split by semi-colons.
// 8. Loop through all the cookies and split again where the equal signs are. This will give you the first item with index 0 as the name of the cookie. Add a condition to check if the name is equal to the name that was requested in the function parameters. If it matches, assign the value of the second item in the index, which will be the value of the cookie with the selected name. Return cookievalue in the function.
// 9. Add two console log messages using the function to read both cookies you have set earlier. Output the values of the cookies in the console.
// 10. To delete a cookie, you need to set a date prior to the current date. You can create a cookie with a -1 date and send the cookie with its selected name to be deleted by invoking the cookie creation function.
// 11. Try deleting a cookie by name.

console.log(document.cookie);
console.log(rCookie("test1"));
console.log(rCookie("test2"));

createCookie("test1", "new Cookie", 30);
createCookie("test2", "super Cookie", 60);
deleteCookie("test2");

function createCookie(cName, value, days) {
    if (days) {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        let e = "; expires=" + d.toUTCString();

        document.cookie = cName + "=" + value + e + "; path=/";
    }
}

function rCookie(cName) {
    let cookieValue = false;
    let arr = document.cookie.split("; ");
    
    arr.forEach(str => {
        const cookie = str.split("=");

        if (cookie[0] == cName) {
            cookieValue = cookie[1];
        }
    });
    return cookieValue;
}

function deleteCookie(cName) {
    createCookie(cName, "", -1);
}