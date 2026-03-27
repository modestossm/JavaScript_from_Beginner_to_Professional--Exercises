// Create a JSON file and using fetch, return the results as a usable object into your JavaScript code.

// 1. Create a JSON object and save it in a file called list.json.
// 2. Using JavaScript, assign the filename and path to a variable named url.
// 3. Using fetch, make the request to the file URL. Return the results as JSON.
// 4. Once the response object is ready, iterate through the data and output the results into the console of each item in the JSON file.

const url = "list.json";
const output = document.getElementById("output");

fetch(url)
    .then(rep => rep.json())
    .then((data) => {
        data.forEach((el) => {
            let text = document.createElement("p"); 
            text.textContent = `${el.name} = ${el.status}`;
            
            output.appendChild(text);
            console.log(`${el.name} = ${el.status}`);
        });
    });

